# 🎵 MiMusic 快速使用指南

[![GitHub License](https://img.shields.io/github/license/mimusic-org/mimusic)](https://github.com/mimusic-org/mimusic)
[![Docker Image Version](https://img.shields.io/docker/v/hanxi/mimusic?sort=semver&label=docker%20image)](https://hub.docker.com/r/hanxi/mimusic)
[![Docker Pulls](https://img.shields.io/docker/pulls/hanxi/mimusic)](https://hub.docker.com/r/hanxi/mimusic)
[![GitHub Release](https://img.shields.io/github/v/release/mimusic-org/mimusic)](https://github.com/mimusic-org/mimusic/releases)
[![Visitors](https://api.visitorbadge.io/api/daily?path=mimusic-org%2Fmimusic&label=daily%20visitor&countColor=%232ccce4&style=flat)](https://visitorbadge.io/status?path=mimusic-org%2Fmimusic)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=mimusic-org%2Fmimusic&label=total%20visitor&countColor=%232ccce4&style=flat)](https://visitorbadge.io/status?path=mimusic-org%2Fmimusic)

<p align="center">
  <strong>🎵 自托管个人音乐服务器 — 简单、自由、插件化</strong>
</p>

<p align="center">
  <a href="https://github.com/mimusic-org/mimusic">🏠 GitHub</a> •
  <a href="https://github.com/mimusic-org/mimusic/releases">📥 下载</a> •
  <a href="https://xdocs.hanxi.cc">📖 文档</a> •
  <a href="https://examplemimusic.hanxi.cc">🌐 在线演示（账号/密码：admin）</a> •
  <a href="https://github.com/mimusic-org/mimusic/issues">💬 问题反馈</a> •
  <a href="https://github.com/mimusic-org/mimusic/issues/2">👥 微信群</a> •
  <a href="https://github.com/mimusic-org/mimusic/issues/6">📸 截图</a>
</p>


## ✨ 核心功能

- 🎵 **本地音乐管理** — 扫描本地目录，自动提取 MP3/FLAC/WAV/APE/OGG/M4A 等格式的封面和元数据
- 🧩 **WASM 插件体系** — WebAssembly 沙箱运行，支持洛雪音源、音乐标签刮削、小米音箱控制等扩展插件
- 📱 **跨平台客户端** — Flutter 客户端支持 Android、iOS、macOS、Windows、Linux、Web 六端
- 🌐 **Web 界面** — 完整版内置 Web 前端，开箱即用
- 🔑 **JWT 认证** — 双 Token 机制（Access Token + Refresh Token），支持多设备管理
- 📡 **网络歌曲 & 电台** — 支持添加网络歌曲和网络电台
- 🔌 **完整 REST API** — 内置 Swagger 文档，方便集成和二次开发
- ⚡ **轻量高效** — Go 编写，CGO-free，无外部依赖，适合 NAS / 树莓派等低功耗设备

## 📋 版本说明

MiMusic 提供两种版本，满足不同使用场景：

| 版本 | 后缀 | 说明 | 适用场景 |
|------|------|------|----------|
| 🌟 **完整版** | `-full` | 包含 Web 前端，开箱即用 | 推荐初次使用，访问服务地址即可看到 Web 界面 |
| 📦 **精简版** | 无后缀 | 不包含 Web 前端，体积更小 | 配合 Flutter 桌面/移动客户端，或前后端分离部署 |

> 💡 **推荐**：初次使用建议下载 **完整版（-full）**，开箱即用，无需额外配置前端。

## 🖥️ 平台支持

### 📦 二进制文件

#### 🌟 完整版（推荐）

包含 Web 前端，开箱即用：

| 平台 | 架构 | 下载链接 |
|------|------|--------|
| 🐧 Linux | x86_64 | [mimusic-linux-amd64-full](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-linux-amd64-full) |
| 🐧 Linux | ARM64 | [mimusic-linux-arm64-full](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-linux-arm64-full) |
| 🐧 Linux | ARMv7 | [mimusic-linux-armv7-full](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-linux-armv7-full) |
| 🍎 macOS | x86_64 (Intel) | [mimusic-darwin-amd64-full](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-darwin-amd64-full) |
| 🍎 macOS | ARM64 (Apple Silicon) | [mimusic-darwin-arm64-full](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-darwin-arm64-full) |
| 🪟 Windows | x86_64 | [mimusic-windows-amd64-full.exe](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-windows-amd64-full.exe) |
| 🪟 Windows | ARM64 | [mimusic-windows-arm64-full.exe](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-windows-arm64-full.exe) |

#### 📦 精简版（Lite）

不包含 Web 前端，体积更小：

| 平台 | 架构 | 下载链接 |
|------|------|--------|
| 🐧 Linux | x86_64 | [mimusic-linux-amd64](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-linux-amd64) |
| 🐧 Linux | ARM64 | [mimusic-linux-arm64](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-linux-arm64) |
| 🐧 Linux | ARMv7 | [mimusic-linux-armv7](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-linux-armv7) |
| 🍎 macOS | x86_64 (Intel) | [mimusic-darwin-amd64](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-darwin-amd64) |
| 🍎 macOS | ARM64 (Apple Silicon) | [mimusic-darwin-arm64](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-darwin-arm64) |
| 🪟 Windows | x86_64 | [mimusic-windows-amd64.exe](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-windows-amd64.exe) |
| 🪟 Windows | ARM64 | [mimusic-windows-arm64.exe](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-windows-arm64.exe) |

### 🐳 Docker 镜像

#### 🌟 完整版（推荐）

| 平台 | 下载链接 |
|------|--------|
| 🐧 Linux x86_64 | [mimusic-docker-linux-amd64-full.tar](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-amd64-full.tar) |
| 🐧 Linux ARM64 | [mimusic-docker-linux-arm64-full.tar](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-arm64-full.tar) |
| 🐧 Linux ARMv7 | [mimusic-docker-linux-armv7-full.tar](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-armv7-full.tar) |

#### 📦 精简版（Lite）

| 平台 | 下载链接 |
|------|--------|
| 🐧 Linux x86_64 | [mimusic-docker-linux-amd64.tar](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-amd64.tar) |
| 🐧 Linux ARM64 | [mimusic-docker-linux-arm64.tar](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-arm64.tar) |
| 🐧 Linux ARMv7 | [mimusic-docker-linux-armv7.tar](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-armv7.tar) |

## 🚀 快速开始

### 📱 Flutter 客户端

除了 Web 界面，MiMusic 还提供了功能更强大的跨平台 Flutter 客户端，支持 iOS、Android、macOS、Windows、Linux 和 Web。

🔗 **GitHub 仓库**: [https://github.com/mimusic-org/frontend](https://github.com/mimusic-org/frontend)

从 [GitHub Releases](https://github.com/mimusic-org/frontend/releases/latest) 下载对应平台的客户端。

### 📦 方式一：直接运行二进制文件

#### 🐧 Linux / 🍎 macOS

```bash
# 1️⃣ 下载对应平台的二进制文件（推荐完整版）
# 例如 Linux x86_64 完整版:
wget https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-linux-amd64-full

# 2️⃣ 添加执行权限
chmod +x mimusic-linux-amd64-full

# 3️⃣ 创建必要目录
mkdir -p music data

# 4️⃣ 运行
./mimusic-linux-amd64-full
```

#### 🪟 Windows

```powershell
# 1️⃣ 下载对应平台的二进制文件（推荐完整版）
# 例如 Windows x86_64 完整版: mimusic-windows-amd64-full.exe

# 2️⃣ 创建必要目录
mkdir music
mkdir data

# 3️⃣ 运行
.\mimusic-windows-amd64-full.exe
```

### 🐳 方式二：Docker 部署

#### 🌐 从 Docker Hub 拉取（推荐）

```bash
# 🌟 拉取完整版镜像（推荐，包含 Web 前端）
docker pull hanxi/mimusic:full

# 或指定版本的完整版
docker pull hanxi/mimusic:1.0.0-full  # 替换为具体版本号

# 📦 拉取精简版镜像（不含 Web 前端）
docker pull hanxi/mimusic:latest
# 或 docker pull hanxi/mimusic:1.0.0

# 运行容器（以完整版为例）
docker run -d \
  --name mimusic \
  -p 58091:58091 \
  -v /path/to/music:/app/music \
  -v /path/to/data:/app/data \
  -e ADMIN_USERNAME=admin \
  -e ADMIN_PASSWORD=your_secure_password \
  hanxi/mimusic:full
```

#### 📥 从 Release 导入镜像

```bash
# 1️⃣ 下载对应平台的 Docker 镜像 tar 文件（推荐完整版）
wget https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-amd64-full.tar

# 2️⃣ 导入镜像
docker load -i mimusic-docker-linux-amd64-full.tar

# 3️⃣ 查看导入的镜像
docker images | grep mimusic

# 4️⃣ 运行容器（使用导入的镜像标签）
docker run -d \
  --name mimusic \
  -p 58091:58091 \
  -v /path/to/music:/app/music \
  -v /path/to/data:/app/data \
  -e ADMIN_USERNAME=admin \
  -e ADMIN_PASSWORD=your_secure_password \
  hanxi/mimusic:full
```

## ⚙️ 配置说明

### 🌍 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `ADMIN_USERNAME` | 👤 管理员用户名 | admin |
| `ADMIN_PASSWORD` | 🔐 管理员密码 | admin |
| `LISTEN_PORT` | 🔌 服务端口 | 58091 |
| `MUSIC_DIR` | 🎵 音乐文件目录 | ./music |
| `DATA_DIR` | 💾 数据存储目录 | ./data |

### 💻 命令行参数

```bash
# 查看帮助
./mimusic-linux-amd64 -help

# 指定端口
./mimusic-linux-amd64 -port 8080

# 指定管理员用户名
./mimusic-linux-amd64 -username admin

# 指定管理员密码
./mimusic-linux-amd64 -password your_password

# 指定数据库文件路径
./mimusic-linux-amd64 -db data/mimusic.db
```

> ⚠️ **注意**：MiMusic 使用单横杠参数（如 `-help`），不支持双横杠参数（如 `--help`）。

## 📋 使用流程

### 1️⃣ 启动服务

服务启动后，访问 `http://localhost:58091` 即可打开 Web 界面（仅完整版支持，精简版需单独部署前端或使用 Flutter 客户端）。

### 2️⃣ 登录系统

使用配置的管理员账号密码登录。

### 3️⃣ 扫描音乐

在 Web 界面中点击"扫描"按钮，系统会自动扫描音乐目录中的音频文件并提取元数据。

### 4️⃣ 播放音乐

扫描完成后，即可在界面中浏览和播放音乐。

## 📌 版本检查

## 🔌 API 使用

### 🔑 登录获取 Token

```bash
curl -X POST http://localhost:58091/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your_password"}'
```

响应示例：
```json
{
  "access_token": "eyJhbGci...",
  "refresh_token": "eyJhbGci...",
  "expires_in": 604800,
  "token_type": "Bearer"
}
```

### 🔐 使用 Token 访问 API

```bash
# 获取歌曲列表
curl -X GET http://localhost:58091/api/v1/songs \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# 获取歌单列表
curl -X GET http://localhost:58091/api/v1/playlists \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 📌 版本检查

```bash
# 查看帮助信息（含版本）
./mimusic-linux-amd64 -help

# 通过 API 检查版本
curl http://localhost:58091/api/v1/version
```

> ⚠️ **注意**：`-version` 参数不支持，请使用 `-help` 查看版本信息。

## ✅ 校验文件完整性

每个 Release 都包含 `checksums.txt` 文件，用于验证下载文件的完整性：

```bash
# 下载校验和文件
wget https://github.com/mimusic-org/mimusic/releases/latest/download/checksums.txt

# 验证文件
sha256sum -c checksums.txt
```

## ❓ 常见问题

遇到问题？请查看 [常见问题与解决方案](https://github.com/mimusic-org/mimusic/issues/1) 💬

## 💻 系统要求

| 项目 | 要求 |
|------|------|
| **操作系统** | 🐧 Linux / 🍎 macOS / 🪟 Windows |
| **架构** | x86_64 / ARM64 / ARMv7 |
| **可选依赖** | 🔧 ffprobe（用于获取音频技术参数，不安装也可正常运行） |

## 🔌 插件系统

MiMusic 内置 WebAssembly (WASM) 插件引擎，插件运行在安全沙箱中，支持完整的生命周期管理。

### 🎯 官方插件

| 插件 | 说明 | 下载 |
|------|------|------|
| 🎵 洛雪音源 | 聚合多平台音乐源，支持搜索和导入网络歌曲 | [下载](https://github.com/mimusic-org/mimusic-plugin-lxmusic/releases/latest) |
| 🏷️ 音乐标签刮削 | 从各平台提取歌曲元数据（标题、专辑、艺术家、歌词、封面） | [下载](https://github.com/mimusic-org/mimusic-plugin-musictag/releases/latest) |
| 📻 小米音箱插件 | 小米账号登录和小爱音箱控制，支持多账号管理 | [下载](https://github.com/mimusic-org/plugins/releases/latest) |

> 更多插件请访问 [插件合集](https://xdocs.hanxi.cc/issues/4)

### 🛠️ 插件开发

如需开发自定义插件，请参考以下资源：

- **插件协议库**: [mimusic-org/plugin](https://github.com/mimusic-org/plugin) - 开发 MiMusic 插件时使用的协议库
- **插件示例**: [mimusic-org/mimusic-plugin-example](https://github.com/mimusic-org/mimusic-plugin-example) - 官方插件示例代码

## 📖 API 文档

完整的 API 文档（Swagger/OpenAPI 格式）可在以下地址查看：

- **Swagger API 文档**: [swagger.json](https://github.com/mimusic-org/mimusic/blob/main/docs/swagger.json)
- **Swagger UI 在线查看**: [petstore.swagger.io](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/mimusic-org/mimusic/refs/heads/main/docs/swagger.json)
- **本地查看**: 启动服务后访问 `http://localhost:58091/swagger/index.html`

### 主要接口概览

| 接口组 | 路径 | 说明 |
|--------|------|------|
| 认证 | `/api/v1/auth/*` | 登录、刷新 Token、登出、Token 管理 |
| 歌曲 | `/api/v1/songs/*` | 歌曲 CRUD、封面、播放、歌词 |
| 歌单 | `/api/v1/playlists/*` | 歌单 CRUD、歌单歌曲管理 |
| 插件 | `/api/v1/plugins/*` | 插件上传、启用、禁用、删除 |
| 扫描 | `/api/v1/scan/*` | 音乐库扫描 |
| 配置 | `/api/v1/configs/*` | 系统配置管理 |
| 版本 | `/api/v1/version` | 版本信息 |

## 🛠️ 技术支持

- **GitHub**: [mimusic-org/mimusic](https://github.com/mimusic-org/mimusic)
- **Issues**: [问题与反馈](https://github.com/mimusic-org/mimusic/issues)
- 💬 加入微信群交流：[微信群二维码](https://github.com/mimusic-org/mimusic/issues/2)
- 🐧 QQ群: 979995241

## 💖 支持项目

如果这个项目对你有帮助，欢迎通过以下方式支持：

### ⭐ Star 项目
点击右上角的 ⭐ Star 按钮，让更多人发现这个项目

### 💰 赞赏支持
- [💝 爱发电](https://afdian.com/a/imhanxi) - 持续支持项目发展
- 扫码请作者喝杯奶茶 ☕

<p align="center">
  <img src="https://i.v2ex.co/7Q03axO5l.png" alt="赞赏码" width="300">
</p>

### 🎁 其他支持方式
- 📢 分享给更多需要的朋友
- 🐛 提交 Bug 报告和功能建议
- 📝 贡献文档

---

## 📄 许可证

本项目基于 [Apache-2.0 License](LICENSE) 开源。

