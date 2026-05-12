# JS 插件开发指南

本文档详细介绍 MiMusic JS 插件系统的架构、API 和开发流程。

---

## 1. 概述

MiMusic JS 插件系统允许开发者使用 JavaScript 扩展音乐服务器功能，无需编译 Go 代码。

### 设计理念

系统基于 **Skynet Actor 模型**设计：

- 每个插件是一个独立的 **Actor（JSService）**，拥有自己的 JS 虚拟机
- 插件之间通过 **消息** 通信，互不干扰
- 所有消息由 **ServiceScheduler** 统一调度，保证串行处理
- 双层 SHA256 校验确保插件代码完整性

### 核心特性

| 特性 | 说明 |
|------|------|
| 沙箱隔离 | 每个插件运行在独立的 QuickJS 虚拟机中 |
| 权限控制 | 细粒度权限声明，按需授权 |
| 热更新 | 运行时更新插件，无需重启服务 |
| 插件间通信 | send/call 消息机制 |
| 静态资源 | 内置 Web UI 托管 |
| 健康检查 | 自动检测异常插件并处理 |

### 架构示意

```
Manager（管理器）
  ├── PackageManager（包管理：安装/更新/卸载）
  ├── ServiceScheduler（消息调度器）
  │   ├── JSService[plugin-a]（Actor + QuickJS VM）
  │   ├── JSService[plugin-b]（Actor + QuickJS VM）
  │   └── ...
  ├── HotReloader（热更新监控）
  └── HealthChecker（健康检查）
```

---

## 2. 快速开始

5 分钟创建你的第一个 JS 插件。

### Step 1: 创建目录结构

```
my-plugin/
├── plugin.json    # 插件清单（必须）
├── main.js        # 入口文件（必须）
└── static/        # 静态资源（可选）
    └── index.html
```

### Step 2: 编写 plugin.json

```json
{
  "name": "My Plugin",
  "version": "1.0.0",
  "description": "我的第一个 JS 插件",
  "author": "Your Name",
  "entryPath": "my-plugin",
  "main": "main.js",
  "permissions": ["http", "storage"]
}
```

### Step 3: 编写 main.js

```javascript
function onInit() {
    mimusic.log.info("My Plugin started!");
}

function onDeinit() {
    mimusic.log.info("My Plugin stopped!");
}

function onHTTPRequest(req) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello!" }),
        headers: { "Content-Type": "application/json" }
    };
}
```

### Step 4: 打包为 ZIP

```bash
cd my-plugin/
zip -r ../my-plugin.jsplugin.zip plugin.json main.js static/
```

### Step 5: 上传安装

通过 MiMusic 设置页面上传 `.jsplugin.zip` 文件，或直接将 ZIP 放入 `data/jsplugins/` 目录。

安装后，插件 HTTP API 可通过 `/api/v1/jsplugins/my-plugin/` 访问。

---

## 3. 插件结构

### ZIP 打包格式

插件以 `.jsplugin.zip` 格式分发，文件名规则：`{entryPath}.jsplugin.zip`

ZIP 内部结构（所有文件在根级别，不含父目录）：

```
plugin.json          # 插件清单（必须）
main.js              # 入口文件（必须，或 main.jsc 字节码）
static/              # 静态资源目录（可选）
  ├── index.html
  ├── style.css
  └── app.js
```

### plugin.json 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `name` | string | 是 | 插件名称（2-50 字符） |
| `version` | string | 是 | 语义化版本号（如 `1.0.0`） |
| `description` | string | 否 | 插件描述 |
| `author` | string | 否 | 作者 |
| `homepage` | string | 否 | 主页 URL |
| `license` | string | 否 | 许可证 |
| `entryPath` | string | 是 | 路由前缀（小写字母+数字+连字符，如 `my-plugin`） |
| `main` | string | 是 | 入口文件路径（必须以 `.js` 结尾） |
| `minHostVersion` | string | 否 | 最低宿主版本要求 |
| `permissions` | string[] | 是 | 权限列表（可为空数组 `[]`） |
| `updateUrl` | string | 否 | 远程更新检查 URL |
| `download_url` | string | 否 | 插件下载 URL |

### entryPath 命名规则

- 仅允许小写字母、数字和连字符
- 必须以小写字母开头
- 正则：`^[a-z][a-z0-9-]*$`
- 示例：`mimusic-jsplugin-example`、`music-sync`、`lx-source`

---

## 4. 生命周期

插件有三个核心生命周期回调函数：

### onInit()

插件加载完成后调用。用于初始化资源、设置定时器等。

```javascript
function onInit() {
    mimusic.log.info("Plugin initialized");
    mimusic.storage.set("start_time", new Date().toISOString());
}
```

**注意**：`onInit()` 失败不会阻止插件运行，插件仍可响应 HTTP 请求。

### onDeinit()

插件卸载前调用。用于清理资源、保存状态。

```javascript
function onDeinit() {
    mimusic.log.info("Plugin shutting down, saving state...");
}
```

### onHTTPRequest(req)

收到 HTTP 请求时调用。这是插件对外提供服务的主要入口。

**参数 `req` 结构：**

```javascript
{
    method: "GET",           // HTTP 方法
    path: "/songs",          // 请求路径（相对于插件的 entryPath）
    headers: {},             // 请求头 map
    body: "",                // 请求体（POST/PUT 时）
    query: "limit=10&offset=0"  // URL 查询字符串
}
```

**返回值结构：**

```javascript
{
    statusCode: 200,          // HTTP 状态码
    headers: {                // 响应头
        "Content-Type": "application/json"
    },
    body: "..."               // 响应体（字符串）
}
```

**示例：路由分发**

```javascript
function onHTTPRequest(req) {
    switch (req.path) {
        case "/":
        case "":
            return { statusCode: 200, body: "Hello!", headers: {} };
        case "/api/data":
            if (req.method === "POST") {
                return handlePost(req);
            }
            return handleGet(req);
        default:
            return { statusCode: 404, body: "Not Found", headers: {} };
    }
}
```

---

## 5. API 参考

所有 API 通过全局 `mimusic` 对象访问。

### mimusic.http — HTTP 请求

需要权限：`http`

```javascript
// GET 请求
var resp = mimusic.http.get(url, options);

// POST 请求
var resp = mimusic.http.post(url, body, options);

// 通用请求
var resp = mimusic.http.request(method, url, options);
```

**参数说明：**
- `url` (string) — 请求 URL
- `body` (string) — 请求体
- `options` (object) — 选项：`{ headers: {}, timeout: 30000 }`

**返回值：**
```javascript
{
    status: 200,
    headers: { "content-type": "application/json" },
    body: "..."
}
```

### mimusic.timer — 定时器

需要权限：`timer`

```javascript
// 延迟执行（毫秒）
var id = mimusic.timer.setTimeout(callback, ms);

// 周期执行（毫秒）
var id = mimusic.timer.setInterval(callback, ms);

// 清除定时器
mimusic.timer.clearTimeout(id);
mimusic.timer.clearInterval(id);
```

**注意：** 定时器回调在插件的 Actor 消息循环中执行，保证串行安全。

### mimusic.storage — 持久化存储

需要权限：`storage`

```javascript
// 读取值（返回字符串或 null）
var value = mimusic.storage.get("key");

// 写入值
mimusic.storage.set("key", "value");

// 删除键
mimusic.storage.delete("key");

// 获取所有键名
var keys = mimusic.storage.keys();  // ["key1", "key2", ...]
```

**存储限制：**
- 键名为字符串
- 值为字符串（复杂对象需手动 JSON 序列化）
- 每个插件有独立的存储空间

### mimusic.songs — 歌曲操作

需要权限：`songs.read`

```javascript
// 获取歌曲列表
var songs = mimusic.songs.list({ limit: 20, offset: 0 });

// 根据 ID 获取歌曲
var song = mimusic.songs.getById(123);

// 搜索歌曲
var results = mimusic.songs.search("关键词");
```

**Song 对象结构：**
```javascript
{
    id: 1,
    type: "local",        // "local" | "remote" | "radio"
    title: "歌曲名",
    artist: "艺术家",
    album: "专辑名",
    duration: 240.5,      // 秒
    file_path: "/path/to/file.mp3",
    url: "",
    cover_path: ""
}
```

### mimusic.playlists — 歌单操作

需要权限：`playlists.*`

```javascript
// 获取歌单列表
var playlists = mimusic.playlists.list();

// 根据 ID 获取歌单
var playlist = mimusic.playlists.getById(1);

// 获取歌单中的歌曲
var songs = mimusic.playlists.getSongs(1, { limit: 50, offset: 0 });
```

### mimusic.comm — 插件间通信

需要权限：`inter-plugin`

```javascript
// 异步发送消息（fire-and-forget）
mimusic.comm.send("target-plugin", "action-name", { data: "hello" });

// 同步调用（等待响应，超时默认 10s）
var resp = mimusic.comm.call("target-plugin", "action-name", { data: "hello" }, 5000);
// resp = { success: true, data: { ... } }

// 注册消息处理器
mimusic.comm.onMessage("action-name", function(payload, from) {
    // payload: 发送方传递的数据
    // from: 发送方的 entryPath
    return { result: "processed" };  // 返回值作为 call 的响应
});
```

### mimusic.log — 日志

无需权限。

```javascript
mimusic.log.info("informational message");
mimusic.log.warn("warning message");
mimusic.log.error("error message");
```

日志输出到服务器标准日志，带 `[plugin]` 前缀。

---

## 6. 权限系统

插件必须在 `plugin.json` 的 `permissions` 字段中声明所需权限。运行时调用 API 时会校验权限，未声明的权限将被拒绝。

### 可用权限列表

| 权限 | 说明 |
|------|------|
| `http` | 发起外部 HTTP 请求 |
| `timer` | 使用 setTimeout/setInterval |
| `storage` | 读写持久化存储 |
| `songs.read` | 读取歌曲信息 |
| `songs.write` | 修改歌曲信息 |
| `playlists.*` | 歌单所有操作（通配符） |
| `inter-plugin` | 插件间通信 |
| `command` | 执行系统命令 |

### 通配符机制

以 `.*` 结尾的权限匹配所有子权限。例如 `playlists.*` 匹配 `playlists.list`、`playlists.getSongs` 等。

### 最小权限原则

只声明实际需要的权限，减少安全风险：

```json
{
  "permissions": ["storage", "songs.read"]
}
```

---

## 7. 插件间通信

插件可以通过消息机制相互协作。

### 异步发送（Send）

发送方不等待响应，适合通知类场景：

```javascript
// Plugin A: 通知 Plugin B
mimusic.comm.send("plugin-b", "data-updated", { source: "plugin-a" });
```

### 同步调用（Call）

发送方等待接收方处理并返回结果：

```javascript
// Plugin A: 调用 Plugin B 的服务
var response = mimusic.comm.call("plugin-b", "get-data", { id: 123 }, 5000);
if (response.success) {
    var data = response.data;
}
```

### 注册处理器（onMessage）

接收方注册处理特定 action 的函数：

```javascript
// Plugin B: 注册 action handler
mimusic.comm.onMessage("get-data", function(payload, from) {
    mimusic.log.info("Request from: " + from);
    // payload = { id: 123 }
    return { name: "example", value: 42 };
});

mimusic.comm.onMessage("data-updated", function(payload, from) {
    mimusic.log.info("Got notification from: " + from);
    // 无需返回值（send 场景）
});
```

### 通信权限

通信双方都需要 `inter-plugin` 权限。

---

## 8. 静态资源

插件可以通过 `static/` 目录提供 Web UI。

### 目录结构

```
my-plugin/
├── plugin.json
├── main.js
└── static/
    ├── index.html
    ├── style.css
    └── app.js
```

### 访问路径

安装后，静态文件通过以下路径访问：

```
/api/v1/jsplugins/{entryPath}/static/{filename}
```

例如：`/api/v1/jsplugins/my-plugin/static/index.html`

### 在 HTML 中调用插件 API

```html
<script>
async function callPluginAPI() {
    // 相对路径访问插件的 HTTP API
    const resp = await fetch('../songs');
    const data = await resp.json();
    console.log(data);
}
</script>
```

### 注意事项

- 静态文件在安装时从 ZIP 解压到 `data/jsplugins_data/{entryPath}/static/`
- 更新插件时会重新解压静态文件
- 建议使用相对路径引用 API

---

## 9. 安全机制

### 双层 Hash 校验

插件系统使用两层 SHA256 校验保护代码完整性：

1. **Layer 1 — ZIP Hash**：整个 ZIP 文件的 SHA256
2. **Layer 2 — Entry Hash**：入口文件（main.js）内容的 SHA256

#### 校验流程

```
加载插件时：
1. 计算 ZIP 文件 SHA256 → 与数据库中的 zip_hash 比对
2. 若不匹配：
   - 检查文件 mtime 是否变化
   - mtime 未变 = 文件被篡改 → 拒绝加载
   - mtime 已变 = 合法更新 → 允许并更新 hash
3. 从 ZIP 内存中读取 main.js（不落盘）
4. 计算 main.js SHA256 → 与 entry_hash 比对
5. 若不匹配且 ZIP hash 未变 → 拒绝（内部篡改）
```

### main.js 不落盘

入口文件从 ZIP 直接读入内存，不写入磁盘文件系统，减少被篡改风险。

### 权限隔离

- 每个插件声明权限，运行时严格校验
- 未声明权限的 API 调用会被拒绝
- QuickJS 虚拟机提供运行时隔离

---

## 10. 打包发布

### 打包步骤

```bash
# 1. 确保目录结构正确
my-plugin/
├── plugin.json
├── main.js
└── static/
    └── index.html

# 2. 进入插件目录
cd my-plugin/

# 3. 打包为 ZIP（文件在根级别，不含父目录）
zip -r ../my-plugin.jsplugin.zip plugin.json main.js static/

# 4. 验证 ZIP 结构
unzip -l ../my-plugin.jsplugin.zip
# 应该看到:
#   plugin.json
#   main.js
#   static/index.html
```

### 文件命名

ZIP 文件名格式：`{entryPath}.jsplugin.zip`

系统会从文件名提取 entryPath：`my-plugin.jsplugin.zip` → `my-plugin`

### 安装方式

1. **UI 上传**：通过设置页面的插件管理上传 ZIP
2. **目录放置**：将 ZIP 放入 `data/jsplugins/` 目录，服务启动时自动发现
3. **API 上传**：调用 `/api/v1/plugins/js/upload` 接口

### 更新已有插件

- 上传相同 `entryPath` 的新版本 ZIP 执行更新
- 或直接替换 `data/jsplugins/` 目录中的 ZIP 文件

---

## 11. 热更新

插件支持运行时更新，无需重启 MiMusic 服务。

### 热更新流程

```
1. 检测到 ZIP 文件变化（mtime 改变）
2. 冻结当前服务（停止接收新消息）
3. 调用 onDeinit() 回调
4. 销毁旧的 QuickJS 虚拟机
5. 从新 ZIP 重新加载代码
6. 创建新的 QuickJS 虚拟机
7. 调用 onInit() 回调
8. 解冻服务，恢复消息处理
```

### 自动检测

系统每 30 秒轮询 `data/jsplugins/` 目录，检测 ZIP 文件 mtime 变化。若检测到变化，自动触发热更新。

### 手动触发

通过 API 手动触发热更新：

```
POST /api/v1/plugins/js/{id}/reload
```

### 错误回滚

如果新版本加载失败，系统会尝试回滚到旧版本。若回滚也失败，则将插件标记为 `error` 状态。

### 注意事项

- 热更新期间，正在处理的请求会完成后再切换
- 定时器和存储状态在热更新后需要重新初始化
- 建议在 `onInit()` 中恢复必要状态

---

## 12. 最佳实践

### 性能建议

1. **避免长时间阻塞** — `onHTTPRequest` 应快速返回，耗时操作使用定时器异步处理
2. **合理使用定时器** — 避免过于频繁的 setInterval（建议最小间隔 1 秒）
3. **缓存计算结果** — 使用 `mimusic.storage` 缓存频繁访问的数据
4. **控制响应体大小** — 避免返回过大的 JSON 响应

### 错误处理

```javascript
function onHTTPRequest(req) {
    try {
        // 业务逻辑
        var data = processRequest(req);
        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        };
    } catch (e) {
        mimusic.log.error("Request failed: " + e.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: e.message }),
            headers: { "Content-Type": "application/json" }
        };
    }
}
```

### 版本管理

- 遵循语义化版本（SemVer）
- 在 `plugin.json` 中设置 `updateUrl` 支持远程更新检查
- 重大变更时更新主版本号

### 开发调试

1. 查看服务器日志中 `[plugin]` 前缀的输出
2. 使用 `mimusic.log.info/warn/error` 输出调试信息
3. 健康检查失败会在日志中记录

### 存储使用模式

```javascript
// 存储复杂对象
function saveConfig(config) {
    mimusic.storage.set("config", JSON.stringify(config));
}

function loadConfig() {
    var raw = mimusic.storage.get("config");
    return raw ? JSON.parse(raw) : { defaultKey: "defaultValue" };
}
```

### 插件间协作模式

```javascript
// 服务提供者模式
mimusic.comm.onMessage("get-service", function(payload, from) {
    switch (payload.method) {
        case "translate":
            return { text: translate(payload.text) };
        case "summarize":
            return { summary: summarize(payload.text) };
        default:
            return { error: "unknown method" };
    }
});

// 服务消费者模式
function useTranslation(text) {
    var resp = mimusic.comm.call("translator-plugin", "get-service", {
        method: "translate",
        text: text
    }, 5000);
    if (resp.success && resp.data) {
        return resp.data.text;
    }
    return text; // fallback
}
```

---

## 附录：完整示例

参见 `jsplugins/mimusic-jsplugin-example/` 目录，包含完整的示例插件代码。
