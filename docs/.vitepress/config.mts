import { loadEnv, defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import GitHubIssuesPlugin from './vitepress-plugin-github-issues.mts';
import taskLists from 'markdown-it-task-lists'

export default async ({ mode }) => {
  const env = loadEnv(mode || '', process.cwd())
  return defineConfig({
    title: "MiMusic",
    description: "MiMusic - 自托管个人音乐服务器，支持 WASM 插件扩展，跨平台 Flutter 客户端",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '快速开始', link: '/issues/index' },
        { text: '客户端', link: '/issues/8' },
        { text: '插件', link: '/issues/4' },
        { text: 'FAQ', link: '/issues/1' },
        { text: '更新日志', link: '/issues/changelog' },
        { text: 'API 文档', link: 'https://petstore.swagger.io/?url=https://raw.githubusercontent.com/mimusic-org/mimusic/refs/heads/main/docs/swagger.json' },
        { text: '演示站', link: 'https://examplemimusic.hanxi.cc' },
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/mimusic-org/mimusic' }
      ],

      footer: {
        message: '非商业化免费使用',
        copyright: `版权所有 © 2025-${new Date().getFullYear()} 涵曦`
      },

      search: {
        provider: 'local',
      },

      editLink: {
        pattern: 'https://github.com/mimusic-org/mimusic/issues',
        text: '在 GitHub 上提问'
      },
    },
    sitemap: {
      hostname: 'https://xdocs.hanxi.cc'
    },
    head: [
      ['meta', { name: 'og:type', content: 'website' }],
      ['meta', { name: 'og:title', content: 'MiMusic - 自托管个人音乐服务器' }],
      ['meta', { name: 'og:description', content: '简单、自由、插件化的个人音乐服务器，支持 WASM 插件扩展' }],
      ['script', { defer: true, src: 'https://umami.hanxi.cc/script.js', 'data-website-id': '29cca3f5-e420-432b-adc7-8a1325d31c68' }]
    ],
    lastUpdated: true,
    markdown: {
      lineNumbers: false, // 关闭代码块行号显示
      // 自定义 markdown-it 插件
      config: (md) => {
        md.use(taskLists)
        md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
          const aIndex = tokens[idx].attrIndex('target');
          if (aIndex < 0) {
            tokens[idx].attrPush(['target', '_self']); // 将默认行为改为不使用 _blank
          } else {
            tokens[idx].attrs![aIndex][1] = '_self'; // 替换 _blank 为 _self
          }
          return self.renderToken(tokens, idx, options);
        };
      },
    },
    logLevel: 'warn',
    vite: {
      plugins: [
        AutoSidebar({
          path: '.',
          collapsed: true,
          titleFromFile: true,
        }),
        GitHubIssuesPlugin({
          repo: 'mimusic-org/mimusic',
          token: env.VITE_GITHUB_ISSUES_TOKEN,
          replaceRules: [
            {
              baseUrl: 'https://github.com/mimusic-org/mimusic/issues',
              targetUrl: '/issues',
            },
          ],
          githubProxy: 'https://gproxy.hanxi.cc/proxy',
        }),
      ],
    }
  })
}
