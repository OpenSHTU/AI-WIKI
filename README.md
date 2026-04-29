# AI Knowledge Graph

> [!TIP]
> 该网站内容正在监修中，目前尚未完善。


AI Knowledge Graph 是一个基于 [VitePress](https://vitepress.dev/) 构建的人工智能知识图谱文档站点，面向机器学习、深度学习、自然语言处理、多模态、具身智能以及相关基础学科的系统化整理与持续更新。

## 项目概览

本项目的目标不是零散记录知识点，而是将 AI 领域中分散的概念、方法与论文组织成可导航、可扩展的知识网络，便于长期学习、检索和演进。

## 目录结构

- `docs/`：中文主站内容
- `docs/en/`：英文站内容
- `docs/.vitepress/`：VitePress 配置、主题与构建产物
- `public/images/`：静态资源

## 技术栈

- [VitePress](https://vitepress.dev/)
- `pnpm` 作为包管理器
- `markdown-it-mathjax3` 用于数学公式渲染

## 开发环境

### 安装依赖

```bash
pnpm install
```

### 启动本地开发服务器

```bash
pnpm run docs:dev
```

启动后即可在浏览器中预览文档站点，修改会自动热更新。

## 构建与预览

### 构建静态站点

```bash
pnpm run docs:build
```

构建结果默认输出到 `docs/.vitepress/dist`，可直接部署到任意静态资源托管环境。

### 本地预览构建结果

```bash
pnpm run docs:preview
```


## 贡献说明

欢迎通过 Pull Request 补充内容、修正错误或优化结构。新增内容请尽量保持术语一致、层级清晰，并优先链接到已有知识节点，减少重复描述。
