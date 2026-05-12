#!/usr/bin/env node
// 将仓库根下的 Markdown 文件同步到 docs/ 指定位置，供 VitePress 构建使用。
// 所有拷贝目标均被 docs/.gitignore 忽略，请勿手动编辑。

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = resolve(__dirname, '..');

// 在此追加同步项即可
const syncItems = [
  { from: 'README.md',    to: 'docs/quick-start.md' },
  { from: 'CHANGELOG.md', to: 'docs/changelog.md' },
];

let failed = false;

for (const { from, to } of syncItems) {
  const src = resolve(repoRoot, from);
  const dst = resolve(repoRoot, to);

  if (!existsSync(src)) {
    console.error(`[sync-docs] source file not found: ${src}`);
    failed = true;
    continue;
  }

  try {
    mkdirSync(dirname(dst), { recursive: true });
    copyFileSync(src, dst);
    console.log(`[sync-docs] ${from} -> ${to}`);
  } catch (err) {
    console.error(`[sync-docs] failed to copy ${from} -> ${to}:`, err);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}
