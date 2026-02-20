# 🎵 MiMusic 快速使用指南

[![GitHub License](https://img.shields.io/github/license/mimusic-org/mimusic)](https://github.com/mimusic-org/mimusic)
[![Docker Image Version](https://img.sh.shields.io/docker/v/hanxi/mimusic?sort=semver&label=docker%20image)](https://hub.docker.com/r/hanxi/mimusic)
[![Docker Pulls](https://img.shields.io/docker/pulls/hanxi/mimusic)](https://hub.docker.com/r/hanxi/mimusic)
[![GitHub Release](https://img.shields.io/github/v/release/mimusic-org/mimusic)](https://github.com/mimusic-org/mimusic/releases)
[![Visitors](https://api.visitorbadge.io/api/daily?path=mimusic-org%2Fmimusic&label=daily%20visitor&countColor=%232ccce4&style=flat)](https://visitorbadge.io/status?path=mimusic-org%2Fmimusic)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=mimusic-org%2Fmimusic&label=total%20visitor&countColor=%232ccce4&style=flat)](https://visitorbadge.io/status?path=mimusic-org%2Fmimusic)

<p align="center">
  <strong>🎵 快速下载和使用 MiMusic 发布版本</strong>
</p>

<p align="center">
  <a href="https://github.com/mimusic-org/mimusic">🏠 GitHub</a> •
  <a href="https://github.com/mimusic-org/mimusic/releases">📥 下载</a> •
  <a href="https://github.com/mimusic-org/mimusic/issues">💬 问题反馈</a> •
  <a href="https://github.com/mimusic-org/mimusic/issues/2">👥 微信群</a>
</p>


## 🖥️ 平台支持

### 📦 二进制文件

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

| 平台 | 下载链接 |
|------|--------|
| 🐧 Linux x86_64 | [mimusic-docker-linux-amd64.tar](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-amd64.tar) |
| 🐧 Linux ARM64 | [mimusic-docker-linux-arm64.tar](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-arm64.tar) |
| 🐧 Linux ARMv7 | [mimusic-docker-linux-armv7.tar](https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-armv7.tar) |

## 🚀 快速开始

### 📦 方式一：直接运行二进制文件

#### 🐧 Linux / 🍎 macOS

```bash
# 1️⃣ 下载对应平台的二进制文件
# 例如 Linux x86_64:
wget https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-linux-amd64

# 2️⃣ 添加执行权限
chmod +x mimusic-linux-amd64

# 3️⃣ 创建必要目录
mkdir -p music data

# 4️⃣ 运行
./mimusic-linux-amd64
```

#### 🪟 Windows

```powershell
# 1️⃣ 下载对应平台的二进制文件
# 例如 Windows x86_64: mimusic-windows-amd64.exe

# 2️⃣ 创建必要目录
mkdir music
mkdir data

# 3️⃣ 运行
.\mimusic-windows-amd64.exe
```

### 🐳 方式二：Docker 部署

#### 🌐 从 Docker Hub 拉取（推荐）

```bash
# 拉取镜像
docker pull hanxi/mimusic:latest

# 或指定版本
docker pull hanxi/mimusic:1.0.0  # 替换为具体版本号

# 运行容器
docker run -d \
  --name mimusic \
  -p 58091:58091 \
  -v /path/to/music:/app/music \
  -v /path/to/data:/app/data \
  -e ADMIN_USERNAME=admin \
  -e ADMIN_PASSWORD=your_secure_password \
  hanxi/mimusic:latest
```

#### 📥 从 Release 导入镜像

```bash
# 1️⃣ 下载对应平台的 Docker 镜像 tar 文件
wget https://github.com/mimusic-org/mimusic/releases/latest/download/mimusic-docker-linux-amd64.tar

# 2️⃣ 导入镜像
docker load -i mimusic-docker-linux-amd64.tar

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
  hanxi/mimusic:latest
```

## ⚙️ 配置说明

### 🌍 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `ADMIN_USERNAME` | 👤 管理员用户名 | admin |
| `ADMIN_PASSWORD` | 🔐 管理员密码 | admin |
| `PORT` | 🔌 服务端口 | 58091 |
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

服务启动后，访问 `http://localhost:58091` 即可打开 Web 界面。

### 2️⃣ 登录系统

使用配置的管理员账号密码登录。

### 3️⃣ 扫描音乐

在 Web 界面中点击"扫描"按钮，系统会自动扫描音乐目录中的音频文件并提取元数据。

### 4️⃣ 播放音乐

扫描完成后，即可在界面中浏览和播放音乐。

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
# 查看帮助信息（MiMusic 不支持 --version 参数）
./mimusic-linux-amd64 -help

# 或通过 API 检查版本
curl http://localhost:58091/api/v1/version
```

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

- **操作系统**: 🐧 Linux / 🍎 macOS / 🪟 Windows
- **架构**: x86_64 / ARM64 / ARMv7
- **可选依赖**: 🔧 ffprobe（用于获取音频技术参数，不安装也可正常运行）

## 🛠️ 技术支持

- **GitHub**: [mimusic-org/mimusic](https://github.com/mimusic-org/mimusic)
- **Issues**: [问题与反馈](https://github.com/mimusic-org/mimusic/issues)
- 💬 加入微信群交流：[微信群二维码](https://github.com/mimusic-org/mimusic/issues/2)

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
