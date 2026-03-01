const http = require('http');
const fs = require('fs');
const path = require('path');

const OBSIDIAN_VAULT_PATH = 'C:\\Users\\DAD\\옵시디안_정승희\\흑요석_정승희';
const PORT = 3000;

const server = http.createServer((req, res) => {
    // CORS 헤더 추가
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // 정적 파일 서빙 (HTML, CSS, JS)
    if (req.url.startsWith('/')) {
        const filePath = path.join(__dirname, req.url);
        const ext = path.extname(filePath);

        if (['.html', '.css', '.js'].includes(ext)) {
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf-8');
                const contentType = {
                    '.html': 'text/html',
                    '.css': 'text/css',
                    '.js': 'application/javascript'
                }[ext];
                res.setHeader('Content-Type', contentType + '; charset=utf-8');
                res.writeHead(200);
                res.end(content);
                return;
            }
        }
    }

    // API: Obsidian 볼트의 마크다운 파일 목록
    if (req.url === '/api/obsidian-files') {
        try {
            const files = [];
            const walkDir = (dir, relativeDir = '') => {
                const items = fs.readdirSync(dir);
                items.forEach(item => {
                    const fullPath = path.join(dir, item);
                    const relativePath = relativeDir ? `${relativeDir}/${item}` : item;
                    const stat = fs.statSync(fullPath);

                    if (stat.isDirectory()) {
                        walkDir(fullPath, relativePath);
                    } else if (item.endsWith('.md')) {
                        files.push({
                            name: item,
                            path: relativePath,
                            fullPath: fullPath
                        });
                    }
                });
            };

            walkDir(OBSIDIAN_VAULT_PATH);
            res.writeHead(200);
            res.end(JSON.stringify(files, null, 2));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
        }
    }

    // API: 마크다운 파일 내용 읽기
    else if (req.url.startsWith('/api/obsidian-file/')) {
        try {
            const filePath = decodeURIComponent(req.url.replace('/api/obsidian-file/', ''));
            const fullPath = path.join(OBSIDIAN_VAULT_PATH, filePath);

            // 보안: 경로 검증
            if (!fullPath.startsWith(OBSIDIAN_VAULT_PATH)) {
                res.writeHead(403);
                res.end(JSON.stringify({ error: '접근이 거부되었습니다' }));
                return;
            }

            if (fs.existsSync(fullPath)) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                res.writeHead(200);
                res.end(JSON.stringify({ content: content }));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ error: '파일을 찾을 수 없습니다' }));
            }
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
        }
    }

    // API: 마크다운 파일 다운로드
    else if (req.url.startsWith('/api/download/')) {
        try {
            const filePath = decodeURIComponent(req.url.replace('/api/download/', ''));
            const fullPath = path.join(OBSIDIAN_VAULT_PATH, filePath);

            // 보안: 경로 검증
            if (!fullPath.startsWith(OBSIDIAN_VAULT_PATH)) {
                res.writeHead(403);
                res.end('접근이 거부되었습니다');
                return;
            }

            if (fs.existsSync(fullPath)) {
                const fileName = path.basename(fullPath);
                res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
                res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}`);
                const fileStream = fs.createReadStream(fullPath);
                fileStream.pipe(res);
            } else {
                res.writeHead(404);
                res.end('파일을 찾을 수 없습니다');
            }
        } catch (err) {
            res.writeHead(500);
            res.end('오류: ' + err.message);
        }
    }

    // 기본 응답
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: '찾을 수 없음' }));
    }
});

server.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다`);
    console.log(`📚 Obsidian 볼트: ${OBSIDIAN_VAULT_PATH}`);
});
