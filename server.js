const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(__dirname));

const OBSIDIAN_VAULT = 'C:/Users/은서뺴고/Documents/Obsidian';

// 재귀적으로 .md 파일 목록 가져오기
function getMdFiles(dir, baseDir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file.startsWith('.')) return; // 숨김 폴더 제외
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results = results.concat(getMdFiles(fullPath, baseDir));
        } else if (file.endsWith('.md') && stat.size > 0) {
            const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
            const folder = path.relative(baseDir, dir).replace(/\\/g, '/') || '루트';
            results.push({
                name: file,
                path: fullPath.replace(/\\/g, '/'),
                relativePath: relativePath,
                folder: folder
            });
        }
    });
    return results;
}

// .md 파일 목록 반환
app.get('/api/obsidian-files', (req, res) => {
    try {
        const files = getMdFiles(OBSIDIAN_VAULT, OBSIDIAN_VAULT);
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 절대경로로 파일 읽기
app.use('/api/obsidian-file', (req, res) => {
    try {
        const filePath = decodeURIComponent(req.url.replace(/^\//, ''));
        const content = fs.readFileSync(filePath, 'utf-8');
        res.send(content);
    } catch (err) {
        res.status(404).json({ error: '파일 없음: ' + err.message });
    }
});

// 다운로드
app.use('/api/download', (req, res) => {
    try {
        const filePath = decodeURIComponent(req.url.replace(/^\//, ''));
        const fileName = path.basename(filePath);
        res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}`);
        res.send(fs.readFileSync(filePath));
    } catch (err) {
        res.status(404).json({ error: '파일 없음: ' + err.message });
    }
});

app.listen(3000, () => {
    console.log('✅ 서버 실행 중: http://localhost:3000');
});