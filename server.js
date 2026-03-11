const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;

// Find the correct root dir (handles subfolder deployments)
let ROOT = __dirname;

// If HTML files not in __dirname, search one level up or in subfolders
const checkFile = (dir, file) => fs.existsSync(path.join(dir, file));

if (!checkFile(ROOT, 'index.html')) {
  // Try common Railway paths
  const candidates = [
    path.join(ROOT, '..'),
    path.join(ROOT, 'public'),
    path.join(ROOT, 'dist'),
    '/app',
  ];
  for (const c of candidates) {
    if (checkFile(c, 'index.html')) { ROOT = c; break; }
  }
}

console.log('Serving from:', ROOT);
console.log('index.html exists:', checkFile(ROOT, 'index.html'));
console.log('mypage.html exists:', checkFile(ROOT, 'mypage.html'));
console.log('agent-wallet.html exists:', checkFile(ROOT, 'agent-wallet.html'));

app.use(express.static(ROOT, { index: false }));

app.get('/mypage', (req, res) => {
  const f = path.join(ROOT, 'mypage.html');
  fs.existsSync(f) ? res.sendFile(f) : res.sendFile(path.join(ROOT, 'index.html'));
});

app.get('/agent-wallet', (req, res) => {
  const f = path.join(ROOT, 'agent-wallet.html');
  fs.existsSync(f) ? res.sendFile(f) : res.sendFile(path.join(ROOT, 'index.html'));
});

app.get('/', (req, res) => res.sendFile(path.join(ROOT, 'index.html')));
app.get('*', (req, res) => res.sendFile(path.join(ROOT, 'index.html')));

app.listen(PORT, () => console.log('Molty Royale running on port ' + PORT));
