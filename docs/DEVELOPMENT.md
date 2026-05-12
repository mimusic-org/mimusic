# 文档站开发说明

本文档面向希望在本地预览或修改 MiMusic 文档站的开发者。

## 本地预览

```bash
cd docs
npm install
npm run docs:dev
```

默认监听 `http://localhost:3030`。`docs:dev` 会先执行 `sync` 把仓库根的 `README.md`、`CHANGELOG.md` 同步到 `docs/quick-start.md`、`docs/changelog.md`。

## 目录分类

`docs/` 下的 Markdown 文件分三类，请在修改前先判断文件类型：

| 文件 | 类型 | 如何修改 |
|------|------|---------|
| `index.md` | 源文件 | 直接编辑 |
| `faq.md` | 源文件 | 直接编辑 |
| `js-plugin-development-guide.md` | 源文件 | 直接编辑 |
| `swagger.json` | 手动维护 | 从主仓 `mimusic/docs/swagger.json` 复制 |
| `quick-start.md` | 构建时生成 | 改仓库根的 `README.md` |
| `changelog.md` | 构建时生成 | 改仓库根的 `CHANGELOG.md` |
| `issues/*.md` | 运行时生成 | 改 GitHub issues（带「文档」标签） |

生成类文件全部被 `docs/.gitignore` 忽略，不要提交，也不要手动编辑。

## 同步脚本

`scripts/sync-docs.mjs` 负责把仓库根 Markdown 拷贝到 `docs/`，需要新增同步项时在脚本顶部 `syncItems` 数组追加一行即可。

## GitHub issues 抓取

`docs/.vitepress/vitepress-plugin-github-issues.mts` 在构建时从 GitHub API 拉取带「文档」标签的 issues 生成 `docs/issues/*.md`。需要 `VITE_GITHUB_ISSUES_TOKEN` 环境变量，本地构建若无此变量会静默失败（站点仍可构建，但 issues 页面为空）。
