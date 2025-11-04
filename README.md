#  玉米集市 - 精选域名售卖平台

一个简洁专业的域名交易展示平台，专门用于展示和销售精选优质域名。

## 项目特性

✨ **核心功能**
- 🎯 精选域名展示 - 支持多种 TLD 扩展名（.com、.sale、.tax、.cool 等）
- 🔍 智能筛选 - 按域名后缀快速筛选
- 📊 排序功能 - 支持按价格、域名长度、到期时间排序
- 🎨 响应式设计 - 完美适配桌面和移动设备
- 📱 现代 UI - 清爽简洁的卡片式布局

## 技术栈

- **前端框架**: 原生 HTML/CSS/JavaScript（无依赖）
- **样式预处理**: CSS3 Grid & Flexbox
- **图标**: SVG favicon (logo.svg)

## 快速开始

### 本地开发

1. **克隆或下载项目**
   ```bash
   git clone https://github.com/woohui/yumi.git
   cd yumi
   ```

2. **本地预览**
   - 使用任何 HTTP 服务器启动项目
   - 直接使用浏览器访问 

### 部署

#### GitHub Pages 部署
1. Fork 本仓库
2. 在 GitHub 仓库设置中启用 GitHub Pages
3. 选择部署源为 main 分支
4. 访问 `https://yourusername.github.io/yumi/`

#### 自托管
1. 上传所有文件到你的服务器
2. 配置 Web 服务器指向项目根目录
3. 访问你的域名即可

## 文件结构

```
yumi/
├── index.html              # 主页面
├── style.css               # 样式文件
├── script.js               # 交互脚本
├── logo.svg                # 网站 favicon
├── img/
│   ├── logo.svg            # 网站 logo (SVG)
│   └── umami.svg           # 数据分析 icon
└── README.md               # 本文件
```

## 核心功能说明

### 1. 域名展示
- 自动生成卡片式域名展示
- 显示域名含义、注册商、到期时间、售价
- 支持自用域名标记（如 yumi.sale）
- 已售域名单独区分展示

### 2. 交互功能
- **筛选**: 点击顶部按钮按 TLD 快速筛选
- **排序**: 下拉菜单支持 7 种排序方式
- **链接**: 阿里云域名可直接链接到阿里云米表
- **复制邮箱**: 点击邮箱地址一键复制（i@yumi.sale）

### 3. 视觉效果
- Bing 每日图片作为页面背景
- 响应式设计，完美适配各种屏幕
- 平滑过渡动画和 hover 效果
- 自适应通知提示框

## 自定义指南

### 添加新域名

在 `index.html` 的 `<main>` 部分添加新卡片：

```html
<div class="card" data-price="999" data-expiry="2026-12-31" data-suffix="com">
    <div class="card-content">
        <h3><a href="https://mi.aliyun.com/domain-detail?domain=example.com&scm=true" target="_blank">example.com</a></h3>
        <p class="meaning"><strong>含义:</strong> 你的域名含义描述</p>
        <p><strong>注册商:</strong> 阿里云</p>
        <p><strong>到期时间:</strong> 2026-12-31</p>
        <p><strong>状态:</strong> 售卖中</p>
        <p class="price">价格: ¥999</p>
    </div>
</div>
```

**重要属性说明:**
- `data-price`: 域名价格（数字）
- `data-expiry`: 域名到期日期（YYYY-MM-DD 格式）
- `data-suffix`: 域名后缀（用于筛选）

### 修改颜色主题

编辑 `style.css` 中的 CSS 变量：

```css
/* 主色调 */
.card-content h3 a {
    color: #007BFF;  /* 修改链接颜色 */
}

/* 精选 badge */
.badge-featured {
    background-color: #2A2825;  /* 背景色 */
    color: #FAFAD0;             /* 文字色 */
}
```

### 更换 Logo

1. 替换 `img/logo.svg` 文件
2. 或修改 `index.html` 中的 favicon 引用：
   ```html
   <link rel="icon" type="image/svg+xml" href="img/your-logo.svg">
   ```

### 配置分析

- 项目使用 Umami Analytics 进行数据分析
- 修改 `index.html` 脚本中的 `data-website-id`

## 联系方式

- **邮箱**: i@yumi.sale
- **域名**: https://yumi.sale

## SEO 优化

项目已包含以下 SEO 最佳实践：
- ✅ 元数据（Meta Description、Keywords）
- ✅ Open Graph 标签（社交媒体分享）
- ✅ Twitter Card 标签
- ✅ Schema.org 结构化数据
- ✅ Canonical 链接
- ✅ Robots 配置

## 浏览器兼容性

- ✅ Chrome/Edge 最新版本
- ✅ Firefox 最新版本
- ✅ Safari 最新版本
- ✅ 移动浏览器（iOS Safari、Android Chrome）

## 性能优化

- 原生 HTML/CSS/JavaScript，无沉重依赖
- CSS 使用 Grid 和 Flexbox 布局
- 异步加载 Bing 图片避免阻塞
- 高效的 DOM 操作

## 许可证

MIT License - 自由使用、修改和分发

## 贡献

欢迎 Fork 和提交 Pull Request！

## 更新日志

### v1.0.0 (2025-11-04)
- ✨ 初始版本发布
- 🎨 完整的域名米表功能
- 📱 响应式设计
- 🔍 搜索和排序功能
- 📊 SEO 优化

---

**制作者**: Yumi.sale
**最后更新**: 2025年11月4日

---

**如有问题或建议，欢迎联系我们！**
