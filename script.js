/* ───────────────────────────────────────────────
   Obsidian-style Homepage — app.js
──────────────────────────────────────────────── */

// ── Page Data ──────────────────────────────────────────────
const PAGES = {
  welcome: {
    title: 'Welcome',
    folder: '홈',
    backlinks: ['about', 'graph'],
    outlinks: ['about', 'note1', 'note2'],
    tags: ['#시작', '#소개', '#vault'],
    content: `
      <div class="properties">
        <div class="prop-row"><span class="prop-key">created</span><span class="prop-val">2024-01-01</span></div>
        <div class="prop-row"><span class="prop-key">status</span><span class="prop-val">📌 pinned</span></div>
        <div class="prop-row"><span class="prop-key">type</span><span class="prop-val">homepage</span></div>
      </div>
      <h1>✦ Welcome to My Vault</h1>
      <div class="tags">
        <span class="tag">#시작</span>
        <span class="tag">#소개</span>
        <span class="tag">#vault</span>
      </div>
      <p>이것은 <strong>Obsidian</strong> 스타일로 만들어진 개인 지식 관리 홈페이지입니다. 왼쪽 사이드바에서 파일을 선택하거나, 아래 링크를 클릭해 탐색하세요.</p>
      <div class="callout callout-tip">
        <div class="callout-title">💡 Tip</div>
        <p style="margin:0;font-size:0.88rem;">상단 오른쪽 🌙 버튼으로 다크/라이트 모드를 전환할 수 있습니다.</p>
      </div>
      <h2>📌 시작하기</h2>
      <p>노트들은 서로 연결되어 있습니다. 아래 위키 링크를 클릭해 다른 노트로 이동해보세요:</p>
      <ul>
        <li><a class="wikilink" data-target="about">[[About Me]]</a> — 나에 대한 소개</li>
        <li><a class="wikilink" data-target="note1">[[아이디어 메모]]</a> — 무작위 생각들</li>
        <li><a class="wikilink" data-target="note2">[[프로젝트 계획]]</a> — 진행 중인 프로젝트</li>
        <li><a class="wikilink" data-target="graph">[[그래프 뷰]]</a> — 노트 연결 시각화</li>
      </ul>
      <h2>🗺️ Vault 구조</h2>
      <pre><code>My Vault/
├── 홈/
│   ├── Welcome.md       ← 현재 위치
│   └── About Me.md
├── 노트/
│   ├── 아이디어 메모.md
│   ├── 프로젝트 계획.md
│   └── 독서 기록.md
└── 리소스/
    ├── 유용한 링크.md
    └── 그래프 뷰.md</code></pre>
      <blockquote>"지식은 연결될 때 비로소 지혜가 된다." — Niklas Luhmann</blockquote>
    `
  },
  about: {
    title: 'About Me',
    folder: '홈',
    backlinks: ['welcome', 'note2'],
    outlinks: ['welcome', 'note3', 'links'],
    tags: ['#소개', '#profile'],
    content: `
      <div class="properties">
        <div class="prop-row"><span class="prop-key">created</span><span class="prop-val">2024-01-05</span></div>
        <div class="prop-row"><span class="prop-key">status</span><span class="prop-val">✅ active</span></div>
      </div>
      <h1>👤 About Me</h1>
      <div class="tags"><span class="tag">#소개</span><span class="tag">#profile</span></div>
      <p>안녕하세요! 이곳은 저의 개인 지식 베이스입니다. Obsidian을 활용해 생각과 아이디어를 체계적으로 정리하고 있습니다.</p>
      <h2>🎯 관심사</h2>
      <ul>
        <li>📝 <strong>제텔카스텐 방법론</strong> — 연결 중심 메모 시스템</li>
        <li>🧠 <strong>두 번째 뇌</strong> — 외부 지식 저장소 구축</li>
        <li>💻 <strong>프로그래밍</strong> — 도구로 생산성 극대화</li>
        <li>📚 <strong>독서</strong> — 다양한 분야 탐구</li>
      </ul>
      <h2>🔗 연결된 노트</h2>
      <p><a class="wikilink" data-target="note3">[[독서 기록]]</a>과 <a class="wikilink" data-target="links">[[유용한 링크]]</a>를 함께 살펴보세요.</p>
      <div class="callout callout-info">
        <div class="callout-title">ℹ️ Note</div>
        <p style="margin:0;font-size:0.88rem;">이 페이지는 <a class="wikilink" data-target="welcome">[[Welcome]]</a>에서 참조됩니다.</p>
      </div>
    `
  },
  note1: {
    title: '아이디어 메모',
    folder: '노트',
    backlinks: ['welcome', 'note2'],
    outlinks: ['note2', 'about'],
    tags: ['#아이디어', '#draft'],
    content: `
      <div class="properties">
        <div class="prop-row"><span class="prop-key">created</span><span class="prop-val">2024-02-10</span></div>
        <div class="prop-row"><span class="prop-key">status</span><span class="prop-val">📝 draft</span></div>
      </div>
      <h1>💡 아이디어 메모</h1>
      <div class="tags"><span class="tag">#아이디어</span><span class="tag">#draft</span></div>
      <p>무작위로 떠오르는 생각들을 기록하는 공간입니다. 나중에 정리해서 본 노트로 발전시킵니다.</p>
      <h2>🌱 씨앗 아이디어</h2>
      <ul>
        <li>노트 간 양방향 링크가 창의적 연상을 돕는다</li>
        <li>그래프 뷰에서 지식의 클러스터를 발견할 수 있다</li>
        <li>일일 노트(Daily Note)로 습관 추적하기</li>
        <li>Dataview 플러그인으로 동적 쿼리 만들기</li>
      </ul>
      <h2>🔗 연결</h2>
      <p>→ <a class="wikilink" data-target="note2">[[프로젝트 계획]]</a>으로 발전 가능한 아이디어들</p>
      <blockquote>작은 메모도 나중에 큰 아이디어가 될 수 있다.</blockquote>
      <hr />
      <h3>📅 최근 추가</h3>
      <p>Obsidian과 Notion의 차이: Obsidian은 로컬 마크다운 파일, Notion은 클라우드 데이터베이스. 각각의 장단점이 있다.</p>
    `
  },
  note2: {
    title: '프로젝트 계획',
    folder: '노트',
    backlinks: ['welcome', 'note1', 'about'],
    outlinks: ['note1', 'links'],
    tags: ['#프로젝트', '#계획', '#wip'],
    content: `
      <div class="properties">
        <div class="prop-row"><span class="prop-key">created</span><span class="prop-val">2024-02-15</span></div>
        <div class="prop-row"><span class="prop-key">status</span><span class="prop-val">🚧 in-progress</span></div>
        <div class="prop-row"><span class="prop-key">priority</span><span class="prop-val">🔴 high</span></div>
      </div>
      <h1>🚀 프로젝트 계획</h1>
      <div class="tags"><span class="tag">#프로젝트</span><span class="tag">#계획</span><span class="tag">#wip</span></div>
      <div class="callout callout-warn">
        <div class="callout-title">⚠️ 진행 중</div>
        <p style="margin:0;font-size:0.88rem;">이 프로젝트는 현재 진행 중입니다.</p>
      </div>
      <h2>📋 할 일 목록</h2>
      <ul>
        <li>✅ Obsidian 홈페이지 기본 레이아웃 설계</li>
        <li>✅ 사이드바 파일 트리 구현</li>
        <li>✅ 위키 링크 내비게이션</li>
        <li>✅ 그래프 뷰 시각화</li>
        <li>⬜ 모바일 반응형 최적화</li>
        <li>⬜ 검색 기능 고도화</li>
        <li>⬜ 로컬 스토리지 저장</li>
      </ul>
      <h2>🔗 참고</h2>
      <p><a class="wikilink" data-target="note1">[[아이디어 메모]]</a>와 <a class="wikilink" data-target="links">[[유용한 링크]]</a> 참조</p>
    `
  },
  note3: {
    title: '독서 기록',
    folder: '노트',
    backlinks: ['about'],
    outlinks: ['about', 'note1'],
    tags: ['#독서', '#책'],
    content: `
      <div class="properties">
        <div class="prop-row"><span class="prop-key">created</span><span class="prop-val">2024-03-01</span></div>
        <div class="prop-row"><span class="prop-key">status</span><span class="prop-val">📚 ongoing</span></div>
      </div>
      <h1>📚 독서 기록</h1>
      <div class="tags"><span class="tag">#독서</span><span class="tag">#책</span></div>
      <p>읽은 책들과 핵심 메모를 정리합니다.</p>
      <h2>2024년 읽은 책</h2>
      <h3>Building a Second Brain — Tiago Forte</h3>
      <p>CODE 방법론: Capture → Organize → Distill → Express. 정보를 외부 뇌에 저장해 인지 부하를 줄인다.</p>
      <h3>How to Take Smart Notes — Sönke Ahrens</h3>
      <p>제텔카스텐의 바이블. 영구 메모(Permanent Notes)와 인덱스 카드 시스템에 대한 깊은 통찰.</p>
      <blockquote>"Writing is not the outcome of thinking; it is the medium in which thinking takes place."</blockquote>
      <h3>The Knowledge Machine — Michael Strevens</h3>
      <p>과학적 방법론이 어떻게 인류의 지식을 폭발적으로 증가시켰는가에 대한 탁월한 설명.</p>
      <hr />
      <p>→ <a class="wikilink" data-target="note1">[[아이디어 메모]]</a>에서 파생된 아이디어들 확인하기</p>
    `
  },
  links: {
    title: '유용한 링크',
    folder: '리소스',
    backlinks: ['about', 'note2'],
    outlinks: ['welcome'],
    tags: ['#링크', '#리소스'],
    content: `
      <div class="properties">
        <div class="prop-row"><span class="prop-key">created</span><span class="prop-val">2024-01-10</span></div>
        <div class="prop-row"><span class="prop-key">status</span><span class="prop-val">🔗 reference</span></div>
      </div>
      <h1>🔗 유용한 링크</h1>
      <div class="tags"><span class="tag">#링크</span><span class="tag">#리소스</span></div>
      <h2>🛠️ 도구</h2>
      <ul>
        <li><strong>Obsidian</strong> — obsidian.md — 마크다운 기반 PKM</li>
        <li><strong>Logseq</strong> — logseq.com — 아웃라이너 방식 PKM</li>
        <li><strong>Notion</strong> — notion.so — 올인원 워크스페이스</li>
        <li><strong>Roam Research</strong> — roamresearch.com — 네트워크 사고</li>
      </ul>
      <h2>📖 읽을거리</h2>
      <ul>
        <li>Zettelkasten Method — zettelkasten.de</li>
        <li>Building a Second Brain — fortelabs.com</li>
        <li>Digital Garden — maggieappleton.com/garden-history</li>
      </ul>
      <h2>🎬 영상</h2>
      <ul>
        <li>Nick Milo — Linking Your Thinking (YouTube)</li>
        <li>Bryan Jenks — Obsidian 완전 가이드 (YouTube)</li>
      </ul>
      <hr />
      <p>← <a class="wikilink" data-target="welcome">[[Welcome]]</a>으로 돌아가기</p>
    `
  },
  graph: {
    title: '그래프 뷰',
    folder: '리소스',
    backlinks: ['welcome'],
    outlinks: ['welcome', 'about', 'note1', 'note2', 'note3', 'links'],
    tags: ['#graph', '#시각화'],
    content: `
      <h1>🕸 그래프 뷰</h1>
      <div class="tags"><span class="tag">#graph</span><span class="tag">#시각화</span></div>
      <p>노트 간의 연결을 시각적으로 탐색합니다. 노드를 클릭하면 해당 노트로 이동합니다.</p>
      <div class="graph-wrapper">
        <canvas id="graphCanvas" style="display:block;width:100%;height:500px;"></canvas>
      </div>
    `
  }
};

// ── State ────────────────────────────────────────────────
let currentPage = 'welcome';
let isDark = true;

// ── DOM References ───────────────────────────────────────
const sidebar       = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const themeToggle   = document.getElementById('themeToggle');
const searchInput   = document.getElementById('searchInput');
const contentArea   = document.getElementById('contentArea');
const bcCurrent     = document.getElementById('bcCurrent');
const blList        = document.getElementById('blList');
const outList       = document.getElementById('outList');
const fileTree      = document.getElementById('fileTree');

// ── Navigation ───────────────────────────────────────────
function navigate(pageId) {
  if (!PAGES[pageId]) return;
  currentPage = pageId;
  const page = PAGES[pageId];

  // Update breadcrumb
  bcCurrent.textContent = page.title;

  // Render content
  contentArea.innerHTML = page.content;
  contentArea.style.animation = 'none';
  requestAnimationFrame(() => { contentArea.style.animation = ''; });

  // Highlight active tree item
  document.querySelectorAll('.tree-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === pageId);
  });

  // Update backlinks
  renderLinks(blList, page.backlinks);
  renderLinks(outList, page.outlinks);

  // Attach wikilink clicks
  contentArea.querySelectorAll('.wikilink').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.target);
    });
  });

  // Graph view
  if (pageId === 'graph') {
    setTimeout(drawGraph, 50);
  }
}

function renderLinks(container, links) {
  if (!links || links.length === 0) {
    container.innerHTML = '<div class="bl-empty">없음</div>';
    return;
  }
  container.innerHTML = links.map(id => {
    const p = PAGES[id];
    if (!p) return '';
    return `<div class="bl-item" data-page="${id}">[[${p.title}]]</div>`;
  }).join('');
  container.querySelectorAll('.bl-item').forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.page));
  });
}

// ── Sidebar Toggle ───────────────────────────────────────
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

// ── Theme Toggle ─────────────────────────────────────────
themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

// ── Tree item click ──────────────────────────────────────
fileTree.querySelectorAll('.tree-item').forEach(item => {
  item.addEventListener('click', () => navigate(item.dataset.page));
});

// ── Folder toggle ────────────────────────────────────────
fileTree.querySelectorAll('.tree-header').forEach(header => {
  header.addEventListener('click', () => {
    const key = header.dataset.folder;
    const children = fileTree.querySelector(`[data-children="${key}"]`);
    if (!children) return;
    const isClosed = children.classList.toggle('closed');
    header.classList.toggle('closed', isClosed);
  });
});

// ── Search ───────────────────────────────────────────────
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.tree-item').forEach(item => {
    const name = item.textContent.toLowerCase();
    item.style.display = (!q || name.includes(q)) ? '' : 'none';
  });
  if (!q) {
    // Restore all
    document.querySelectorAll('.tree-item').forEach(el => el.style.display = '');
    return;
  }
  // Find and navigate to first match if Enter pressed
  searchInput.addEventListener('keydown', function handler(e) {
    if (e.key === 'Enter') {
      const visible = [...document.querySelectorAll('.tree-item')]
        .find(el => el.style.display !== 'none' && el.dataset.page);
      if (visible) navigate(visible.dataset.page);
      searchInput.removeEventListener('keydown', handler);
    }
  }, { once: true });
});

// ── Graph View ───────────────────────────────────────────
function drawGraph() {
  const canvas = document.getElementById('graphCanvas');
  if (!canvas) return;

  const wrapper = canvas.parentElement;
  canvas.width  = wrapper.clientWidth  || 700;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  // Build node list
  const pageIds = Object.keys(PAGES);
  const nodes = pageIds.map((id, i) => {
    const angle = (i / pageIds.length) * Math.PI * 2;
    const r = Math.min(W, H) * 0.32;
    return {
      id,
      x: W / 2 + r * Math.cos(angle) + (Math.random() - 0.5) * 60,
      y: H / 2 + r * Math.sin(angle) + (Math.random() - 0.5) * 60,
      vx: 0, vy: 0,
      label: PAGES[id].title
    };
  });

  // Build edges
  const edges = [];
  pageIds.forEach(id => {
    (PAGES[id].outlinks || []).forEach(target => {
      if (PAGES[target]) edges.push({ from: id, to: target });
    });
  });

  const style = getComputedStyle(document.documentElement);
  const accent = isDark ? '#7c6af5' : '#6355d8';
  const nodeColor = isDark ? '#2d4a7a' : '#dbd6cc';
  const activeColor = isDark ? '#7c6af5' : '#6355d8';
  const textColor = isDark ? '#8e9cad' : '#5a5a5a';
  const edgeColor = isDark ? 'rgba(124,106,245,0.25)' : 'rgba(99,85,216,0.2)';

  let selectedNode = currentPage;

  // Simple force simulation
  function simulate() {
    nodes.forEach(n => {
      nodes.forEach(m => {
        if (n === m) return;
        const dx = n.x - m.x, dy = n.y - m.y;
        const dist = Math.max(Math.sqrt(dx*dx+dy*dy), 1);
        const force = 1800 / (dist * dist);
        n.vx += (dx / dist) * force;
        n.vy += (dy / dist) * force;
      });
    });
    edges.forEach(e => {
      const from = nodes.find(n => n.id === e.from);
      const to   = nodes.find(n => n.id === e.to);
      if (!from || !to) return;
      const dx = to.x - from.x, dy = to.y - from.y;
      const dist = Math.max(Math.sqrt(dx*dx+dy*dy), 1);
      const force = (dist - 120) * 0.03;
      from.vx += (dx/dist)*force; from.vy += (dy/dist)*force;
      to.vx   -= (dx/dist)*force; to.vy   -= (dy/dist)*force;
    });
    nodes.forEach(n => {
      n.vx += (W/2 - n.x) * 0.002;
      n.vy += (H/2 - n.y) * 0.002;
      n.vx *= 0.85; n.vy *= 0.85;
      n.x += n.vx; n.y += n.vy;
      n.x = Math.max(40, Math.min(W-40, n.x));
      n.y = Math.max(30, Math.min(H-30, n.y));
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = isDark ? '#1a1a2e' : '#f5f4f0';
    ctx.fillRect(0, 0, W, H);

    // Edges
    edges.forEach(e => {
      const from = nodes.find(n => n.id === e.from);
      const to   = nodes.find(n => n.id === e.to);
      if (!from || !to) return;
      const isHighlighted = e.from === selectedNode || e.to === selectedNode;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.strokeStyle = isHighlighted ? accent : edgeColor;
      ctx.lineWidth = isHighlighted ? 1.5 : 0.8;
      ctx.stroke();
    });

    // Nodes
    nodes.forEach(n => {
      const isActive = n.id === selectedNode;
      const isCurrent = n.id === currentPage;
      const r = isCurrent ? 9 : 6;

      // Glow for active
      if (isActive || isCurrent) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(124,106,245,0.18)' : 'rgba(99,85,216,0.15)';
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = isCurrent ? activeColor : nodeColor;
      ctx.fill();
      if (isActive || isCurrent) {
        ctx.strokeStyle = accent;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Label
      ctx.font = isActive || isCurrent ? '600 11px Syne, sans-serif' : '11px Syne, sans-serif';
      ctx.fillStyle = isActive || isCurrent ? (isDark ? '#dcddde' : '#111') : textColor;
      ctx.textAlign = 'center';
      ctx.fillText(n.label, n.x, n.y + r + 12);
    });
  }

  let tick = 0;
  function loop() {
    if (tick < 80) { simulate(); tick++; }
    draw();
    requestAnimationFrame(loop);
  }
  loop();

  // Click on graph
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (W / rect.width);
    const my = (e.clientY - rect.top)  * (H / rect.height);
    nodes.forEach(n => {
      const dx = n.x - mx, dy = n.y - my;
      if (Math.sqrt(dx*dx+dy*dy) < 12) {
        selectedNode = n.id;
        navigate(n.id);
      }
    });
  });

  canvas.style.cursor = 'crosshair';
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (W / rect.width);
    const my = (e.clientY - rect.top)  * (H / rect.height);
    let hit = nodes.some(n => {
      const dx = n.x - mx, dy = n.y - my;
      return Math.sqrt(dx*dx+dy*dy) < 12;
    });
    canvas.style.cursor = hit ? 'pointer' : 'crosshair';
  });
}

// ── Tags in content ──────────────────────────────────────
document.addEventListener('click', e => {
  if (e.target.classList.contains('tag')) {
    const tag = e.target.textContent;
    searchInput.value = tag.replace('#', '');
    searchInput.dispatchEvent(new Event('input'));
  }
});

// ── Init ─────────────────────────────────────────────────
navigate('welcome');
