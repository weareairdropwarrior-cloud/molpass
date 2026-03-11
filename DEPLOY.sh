#!/bin/bash
REMOTE=$1
if [ -z "$REMOTE" ]; then
  echo "Usage: bash DEPLOY.sh https://github.com/USERNAME/REPO.git"
  exit 1
fi

echo "=== Checking required files ==="
MISSING=0
for f in server.js package.json railway.json index.html mypage.html agent-wallet.html; do
  if [ -f "$f" ]; then echo "✅ $f"
  else echo "❌ MISSING: $f"; MISSING=1; fi
done

if [ -f "assets/index-Bifp6dK1.js" ]; then echo "✅ assets/index-Bifp6dK1.js"
else echo "❌ MISSING: assets/index-Bifp6dK1.js"; MISSING=1; fi

if [ $MISSING -eq 1 ]; then
  echo ""; echo "❌ Missing files! Make sure you're in the right folder."
  echo "Expected structure:"; echo "  ./server.js"; echo "  ./index.html"
  echo "  ./mypage.html"; echo "  ./agent-wallet.html"; echo "  ./assets/*.js"
  exit 1
fi

echo ""; echo "=== Checking for conflict markers ==="
if grep -rl '<<<<<<' . --include="*.js" --include="*.json" --include="*.html" 2>/dev/null | grep -v node_modules | grep -v .git; then
  echo "❌ Conflict markers found!"; exit 1
fi
echo "✅ No conflict markers"

echo ""; echo "=== Pushing to GitHub ==="
rm -rf .git
git init
git checkout -b main
git add .
git commit -m "init: molty royale geo-patched"
git remote add origin $REMOTE
git push -u origin main --force

echo ""; echo "✅ Done! Connect this repo to Railway."
