// Copies the Chart.js browser bundle into www/ so the app works fully offline.
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'node_modules', 'chart.js', 'dist', 'chart.umd.js');
const dst = path.join(__dirname, '..', 'www', 'chart.umd.js');

if (!fs.existsSync(src)) {
  console.error('chart.js not installed - run `npm install` first');
  process.exit(1);
}
fs.copyFileSync(src, dst);
console.log('Copied Chart.js ->', dst);
