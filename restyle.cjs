const fs = require('fs');
const path = require('path');

const root = process.argv[2] || 'src';
const re = (s) => new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');

const rules = [
  [/from-\[#7C3AED\] to-\[#a855f7\]/gi, 'from-[#0057FF] to-[#008CFF]'],
  [/from-\[#7C3AED\] to-\[#5B5BD6\]/gi, 'from-[#0057FF] to-[#008CFF]'],
  [/linear-gradient\(135deg, #7C3AED, #A855F7\)/gi, 'linear-gradient(135deg, #0057FF, #008CFF)'],
  [/linear-gradient\(135deg, #7C3AED\/\d+, #A855F7\/\d+\)/gi, 'linear-gradient(135deg, rgba(0,87,255,.25), rgba(166,107,255,.15))'],
  [/\s+background: 'linear-gradient\([^']*\)'"/g, '"'],
  [/text-\[#6D28D9\]/gi, 'text-[#A66BFF]'],
  [/hover:text-\[#A855F7\]/gi, 'hover:text-[#CDB2FF]'],
  [/text-\[#7C3AED\]/gi, 'text-[#A66BFF]'],
  [/bg-\[#5B5BD6\](?!\/)/gi, 'bg-[#0057FF]'],
  [/hover:bg-\[#4a4ac4\]/gi, 'hover:bg-[#008CFF]'],
  [/shadow-\[#5B5BD6\]\//gi, 'shadow-[#0057FF]/'],
  ...['#07080F', '#05060F', '#08091A', '#0B0D1A', '#100f26'].map((h) => [re(h), '#020A2A']),
  ...['#0D0B1E', '#0E0B1F', '#111428', '#0C0E1C', '#0B0C12'].map((h) => [re(h), '#101336']),
  ...['#110D2A', '#131127', '#0F1128', '#1E2140'].map((h) => [re(h), '#1A1E54']),
  ...['#1E1B3A', '#2D1B69', '#2b1b52', '#1E2448', '#181B30', '#1F2130', '#1E2248'].map((h) => [re(h), '#2A2F7A']),
  ...['#3A3E72', '#2A2E52'].map((h) => [re(h), '#4A4FB0']),
  [re('#1a0533'), '#061A63'], [re('#0f0a2e'), '#101336'], [re('#1e0a3c'), '#1A1E54'], [re('#0d0520'), '#020A2A'],
  ...['#94A3B8', '#c7d2fe', '#dbeafe', '#C0C4FF'].map((h) => [re(h), '#FFFFFF']),
  [re('#9AA0C0'), '#F1F4FF'],
  ...['#475569', '#334155', '#7A82A8', '#64748B'].map((h) => [re(h), '#C9D2F5']),
  [re('#A855F7'), '#A66BFF'],
  ...['#A78BFA', '#C084FC', '#9B9FE8', '#B7ADFF'].map((h) => [re(h), '#CDB2FF']),
  ...['#7B7FE8', '#5B5BD6'].map((h) => [re(h), '#A66BFF']),
];

let changed = 0;
function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) { if (f.name !== 'node_modules') walk(p); continue; }
    if (!/\.(tsx|jsx)$/.test(f.name)) continue;
    const src = fs.readFileSync(p, 'utf8');
    let out = src;
    for (const [from, to] of rules) out = out.replace(from, to);
    if (out !== src) { fs.writeFileSync(p, out); changed++; console.log('обновлён:', p); }
  }
}
walk(root);
console.log('Готово. Изменено файлов: ' + changed);