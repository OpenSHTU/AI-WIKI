import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vitepress'

type SidebarItem = {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const mlDlDir = path.join(docsDir, 'ml-dl')
const enMathDir = path.join(docsDir, 'en', 'math')
const enMlDlDir = path.join(docsDir, 'en', 'ml-dl')
const enNlpDir = path.join(docsDir, 'en', 'nlp')

function humanizeName(name: string): string {
  return name
    .replace(/\.md$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase())
}

function readTitle(filePath: string, fallback: string): string {
  if (!fs.existsSync(filePath)) {
    return fallback
  }

  const content = fs.readFileSync(filePath, 'utf8')
  const match = content.match(/^#\s+(.+)$/m)

  return match?.[1].trim() || fallback
}

function toRoute(filePath: string): string {
  const relativePath = path.relative(docsDir, filePath).replace(/\\/g, '/').replace(/\.md$/, '')

  if (relativePath.endsWith('/index')) {
    return `/${relativePath.slice(0, -'/index'.length)}/`
  }

  return `/${relativePath}`
}

function listEntries(directoryPath: string): fs.Dirent[] {
  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.'))
    .sort((left, right) => {
      if (left.name === 'index.md') {
        return -1
      }

      if (right.name === 'index.md') {
        return 1
      }

      if (left.isDirectory() && !right.isDirectory()) {
        return -1
      }

      if (!left.isDirectory() && right.isDirectory()) {
        return 1
      }

      return left.name.localeCompare(right.name, 'en')
    })
}

function buildMethodItems(directoryPath: string, routePrefix: string): SidebarItem[] {
  const items: SidebarItem[] = []

  for (const entry of listEntries(directoryPath)) {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name === 'index.md') {
      continue
    }

    const filePath = path.join(directoryPath, entry.name)

    items.push({
      text: readTitle(filePath, humanizeName(entry.name)),
      link: `${routePrefix}${entry.name.replace(/\.md$/, '')}`
    })
  }

  return items
}

function buildSidebarItems(directoryPath: string, routePrefix: string): SidebarItem[] {
  const items: SidebarItem[] = []

  for (const entry of listEntries(directoryPath)) {
    if (entry.name === 'index.md') {
      continue
    }

    const entryPath = path.join(directoryPath, entry.name)

    if (entry.isDirectory()) {
      if (entry.name === 'methods') {
        items.push(...buildMethodItems(entryPath, routePrefix))
        continue
      }

      const childGroup = buildSectionGroup(entryPath, `${routePrefix}${entry.name}/`)

      if (childGroup) {
        items.push(childGroup)
      }

      continue
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      items.push({
        text: readTitle(entryPath, humanizeName(entry.name)),
        link: toRoute(entryPath)
      })
    }
  }

  return items
}

function buildSectionGroup(directoryPath: string, routePrefix: string, overviewText = '总览'): SidebarItem | null {
  const overviewPath = path.join(directoryPath, 'index.md')
  const items: SidebarItem[] = []

  if (fs.existsSync(overviewPath)) {
    items.push({
      text: overviewText,
      link: routePrefix
    })
  }

  items.push(...buildSidebarItems(directoryPath, routePrefix))

  if (items.length === 0) {
    return null
  }

  return {
    text: readTitle(overviewPath, humanizeName(path.basename(directoryPath))),
    collapsed: false,
    items
  }
}

function buildMlDlSidebar(): SidebarItem[] {
  const group = buildSectionGroup(mlDlDir, '/ml-dl/')
  return group ? [group] : []
}

function buildEnSectionSidebar(directoryPath: string, routePrefix: string): SidebarItem[] {
  const group = buildSectionGroup(directoryPath, routePrefix, 'Overview')
  return group ? [group] : []
}

const zhNav = [
  { text: '首页', link: '/' },
  { text: '数学基础', link: '/math' },
  { text: '人工智能', link: '/ai/' },
  { text: 'NLP', link: '/nlp/' },
  { text: 'ML & DL', link: '/ml-dl/' },

]

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Math', link: '/en/math/' },
  { text: 'AI', link: '/en/ai/' },
  { text: 'NLP', link: '/en/nlp/' },
  { text: 'ML & DL', link: '/en/ml-dl/' }
]

const zhSidebar = {
  '/ai/': [
    {
      text: '人工智能',
      items: [
        { text: '总览', link: '/ai/' },
        { text: '资源推荐', link: '/ai/resources' }
      ]
    }
  ],
  '/nlp/': [
    {
      text: '自然语言处理 NLP',
      items: [
        { text: '总览', link: '/nlp/' },
        { text: 'Resources', link: '/nlp/resources' },
        { text: '文本预处理', link: '/nlp/text-preprocessing/' },
        { text: '文本表示', link: '/nlp/text-representation/' },
        { text: '语言模型', link: '/nlp/language-modeling/' },
        { text: 'Transformer 架构详解', link: '/nlp/language-modeling/transformer' },
        { text: '序列建模', link: '/nlp/sequence-modeling/' },
        { text: '句法分析', link: '/nlp/syntactic-parsing/' },
        { text: '语义与篇章', link: '/nlp/semantic-discourse/' },
        { text: '下游任务', link: '/nlp/downstream-tasks/' }
      ]
    }
  ],
  '/ml-dl/': buildMlDlSidebar(),
  '/math/': [
    {
      text: '数学基础',
      items: [
        { text: '总览', link: '/math/' },
        { text: '资源推荐', link: '/math/resources' },
        {
          text: '线性代数',
          collapsed: false,
          items: [
            { text: '导览', link: '/math/linear-algebra/' },
            { text: '矩阵与线性方程组', link: '/math/linear-algebra/vectors-matrices-tensors' },
            { text: '线性空间', link: '/math/linear-algebra/vector-spaces' },
            { text: '线性变换', link: '/math/linear-algebra/linear-transformations' },
            { text: '矩阵的谱与性质', link: '/math/linear-algebra/eigen-svd-low-rank' },
            { text: '内积空间', link: '/math/linear-algebra/inner-product-norm-similarity' },
            { text: '矩阵微积分', link: '/math/linear-algebra/matrix-calculus' },
            { text: '线性代数公式汇总', link: '/math/linear-algebra/matrix-formulas-reference' }
          ]
        },
        {
          text: '微积分',
          collapsed: false,
          items: [
            { text: '导览', link: '/math/calculus/' },
            { text: '导数与梯度', link: '/math/calculus/derivatives-and-gradients' },
            { text: '偏导数', link: '/math/calculus/partial-derivatives' },
            { text: '链式法则与反向传播', link: '/math/calculus/chain-rule-backpropagation' },
            { text: 'Jacobian 与 Hessian', link: '/math/calculus/jacobian-and-hessian' },
            { text: '矩阵微积分', link: '/math/calculus/matrix-calculus' }
          ]
        },
        {
          text: '概率论与数理统计',
          collapsed: false,
          items: [
            { text: '导览', link: '/math/probability-statistics/' },
            { text: '概率分布', link: '/math/probability-statistics/probability-distributions' },
            { text: '条件概率与 Bayes', link: '/math/probability-statistics/conditional-probability-bayes' },
            { text: '随机变量、期望与方差', link: '/math/probability-statistics/random-variables-expectation-variance' },
            { text: 'MLE 与 MAP', link: '/math/probability-statistics/mle-map' },
            { text: '泛化与评估', link: '/math/probability-statistics/generalization-and-evaluation' }
          ]
        },
        {
          text: '信息论',
          collapsed: false,
          items: [
            { text: '导论：熵、散度与互信息', link: '/math/information-theory/' }
          ]
        }
      ]
    }
  ]
}

const enSidebar = {
  '/en/math/': buildEnSectionSidebar(enMathDir, '/en/math/'),
  '/en/ai/': [
    {
      text: 'AI',
      items: [
        { text: 'Overview', link: '/en/ai/' },
        { text: 'Resources', link: '/en/ai/resources' }
      ]
    }
  ],
  '/en/nlp/': buildEnSectionSidebar(enNlpDir, '/en/nlp/'),
  '/en/ml-dl/': buildEnSectionSidebar(enMlDlDir, '/en/ml-dl/')
}

export default defineConfig({
  base: process.env.VITEPRESS_BASE ?? '/',
  title: 'AI Wiki',
  description: 'A structured AI knowledge base for NLP, LLMs, multimodal AI, world models, and embodied AI.',
  vite: {
    optimizeDeps: {
      include: ['mermaid']
    }
  },
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true,
    config(md) {
      const defaultFence = md.renderer.rules.fence

      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const language = token.info.trim().split(/\s+/)[0]

        if (language === 'mermaid') {
          return `<MermaidDiagram graph="${encodeURIComponent(token.content)}" />`
        }

        return defaultFence
          ? defaultFence(tokens, idx, options, env, self)
          : self.renderToken(tokens, idx, options)
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'AI Wiki',
      description: '面向 NLP、LLM、多模态、世界模型与具身智能的 AI 知识库。',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        langMenuLabel: '语言',
        returnToTopLabel: '回到顶部',
        outline: {
          label: '本页目录'
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        footer: {
          message: '以知识图谱方式组织 AI 学习路径。',
          copyright: 'Copyright © 2026'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'AI Wiki',
      description: 'A structured AI knowledge base for NLP, LLMs, multimodal AI, world models, and embodied AI.',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        langMenuLabel: 'Language',
        returnToTopLabel: 'Return to top',
        outline: {
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        footer: {
          message: 'AI learning paths organized as a knowledge graph.',
          copyright: 'Copyright © 2026'
        }
      }
    }
  }
})
