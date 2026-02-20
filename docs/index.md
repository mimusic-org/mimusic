---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MiMusic"
  text: "个人音乐服务器"
  tagline: 简单，自由，插件
  actions:
    - theme: brand
      text: 快速开始
      link: /issues/index
    - theme: alt
      text: FAQ
      link: /issues/1
    - theme: alt
      text: GitHub
      link: https://github.com/mimusic-org/mimusic

features:
  - title: 免费使用
    details: 完全免费，自主可控，数据留在自己的设备上
  - title: 一键部署
    details: 支持 Docker 部署，兼容各大 NAS 平台，快速上线
  - title: WASM 插件体系
    details: 原生支持 WebAssembly（WASM）插件，按需加载，轻松扩展刮削、转码、歌词、元数据、鉴权等能力
  - title: 插件隔离更安全
    details: 插件运行在 WASM 沙箱中，边界清晰、可控权限，降低扩展带来的风险
  - title: Go 编写 · 轻量高效
    details: 使用 Go 构建，资源占用低，启动快，适合在 NAS、迷你主机、树莓派等设备运行
  - title: 安装包/镜像更小
    details: 发布包体积小，Docker 镜像也更小，下载更快、更新更省心
---
