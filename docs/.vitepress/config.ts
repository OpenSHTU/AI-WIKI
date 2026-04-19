import { defineConfig } from 'vitepress'

const zhNav = [
  { text: '开始', link: '/start-here' },
  { text: '知识地图', link: '/knowledge-map' },
  { text: '数学基础', link: '/foundations/math/' },
  { text: 'NLP', link: '/nlp/' },
  { text: 'LLM', link: '/llm/' },
  { text: '多模态', link: '/multimodal/' },
  { text: '世界模型', link: '/world-models/' },
  { text: '具身智能', link: '/embodied-ai/' },
  { text: '系统与部署', link: '/systems/' }
]

const enNav = [
  { text: 'Start', link: '/en/start-here' },
  { text: 'Knowledge Map', link: '/en/knowledge-map' },
  { text: 'Math', link: '/en/foundations/math/' },
  { text: 'NLP', link: '/en/nlp/' },
  { text: 'LLM', link: '/en/llm/' },
  { text: 'Multimodal', link: '/en/multimodal/' },
  { text: 'World Models', link: '/en/world-models/' },
  { text: 'Embodied AI', link: '/en/embodied-ai/' },
  { text: 'Systems', link: '/en/systems/' }
]

const zhSidebar = {
  '/foundations/': [
    {
      text: '数学基础',
      collapsed: false,
      items: [
        { text: '数学总览', link: '/foundations/math/' },
        {
          text: '线性代数',
          collapsed: false,
          items: [
            { text: '向量与空间', link: '/foundations/math/linear-algebra/vectors-and-spaces' },
            { text: '矩阵与线性变换', link: '/foundations/math/linear-algebra/matrices' },
            { text: '特征值与特征向量', link: '/foundations/math/linear-algebra/eigenvalues' },
            { text: '奇异值分解', link: '/foundations/math/linear-algebra/svd' },
            { text: '矩阵微积分', link: '/foundations/math/linear-algebra/matrix-calculus' }
          ]
        },
        {
          text: '高等数学',
          collapsed: false,
          items: [
            { text: '极限与连续', link: '/foundations/math/calculus/limits-continuity' },
            { text: '导数与梯度', link: '/foundations/math/calculus/derivatives-gradients' },
            { text: '偏导与链式法则', link: '/foundations/math/calculus/partial-chain-rule' },
            { text: '泰勒展开', link: '/foundations/math/calculus/taylor-expansion' },
            { text: '优化基础', link: '/foundations/math/calculus/optimization' }
          ]
        },
        {
          text: '概率论',
          collapsed: false,
          items: [
            { text: '随机变量', link: '/foundations/math/probability/random-variables' },
            { text: '常见分布', link: '/foundations/math/probability/distributions' },
            { text: '贝叶斯公式', link: '/foundations/math/probability/bayes' },
            { text: '极大似然', link: '/foundations/math/probability/maximum-likelihood' },
            { text: '信息论基础', link: '/foundations/math/probability/information-theory' }
          ]
        }
      ]
    },
    {
      text: 'AI 前置',
      items: [
        { text: '编程基础', link: '/foundations/programming/' },
        { text: '机器学习总览', link: '/foundations/ml/' },
        { text: '监督学习', link: '/foundations/ml/supervised-learning' },
        { text: '损失函数', link: '/foundations/ml/loss-functions' },
        { text: '反向传播', link: '/foundations/ml/backpropagation' },
        { text: '泛化与正则化', link: '/foundations/ml/generalization-regularization' }
      ]
    }
  ],
  '/nlp/': [
    {
      text: 'NLP',
      collapsed: false,
      items: [
        { text: 'NLP 总览', link: '/nlp/' },
        { text: '文本预处理', link: '/nlp/basics/text-preprocessing' },
        { text: '语言建模', link: '/nlp/basics/language-modeling' },
        { text: '词向量', link: '/nlp/representation/word-embeddings' },
        { text: '上下文表示', link: '/nlp/representation/contextual-representations' },
        { text: 'RNN 与 LSTM', link: '/nlp/sequence-models/rnn-lstm' },
        { text: 'Seq2Seq', link: '/nlp/sequence-models/seq2seq' },
        { text: '注意力前夜', link: '/nlp/sequence-models/pre-transformer-attention' }
      ]
    }
  ],
  '/architectures/': [
    {
      text: '架构',
      items: [
        { text: '架构总览', link: '/architectures/' },
        { text: '前馈网络', link: '/architectures/neural-networks/feedforward-networks' },
        { text: '归一化层', link: '/architectures/neural-networks/normalization' },
        { text: '注意力机制', link: '/architectures/attention/attention-mechanism' },
        { text: '自注意力', link: '/architectures/attention/self-attention' },
        { text: '位置编码', link: '/architectures/attention/positional-encoding' }
      ]
    }
  ],
  '/llm/': [
    {
      text: 'LLM',
      collapsed: false,
      items: [
        { text: 'LLM 总览', link: '/llm/' },
        { text: 'Transformer', link: '/llm/transformer/transformer' },
        { text: 'BERT', link: '/llm/transformer/bert' },
        { text: 'GPT', link: '/llm/transformer/gpt' },
        { text: '预训练目标', link: '/llm/pretraining/objectives' },
        { text: 'Tokenizer', link: '/llm/pretraining/tokenizers' },
        { text: '指令微调', link: '/llm/alignment/instruction-tuning' },
        { text: 'RLHF', link: '/llm/alignment/rlhf' },
        { text: 'RAG', link: '/llm/rag/retrieval-augmented-generation' },
        { text: 'Agent', link: '/llm/agents/agent-basics' },
        { text: '推理优化', link: '/llm/inference/inference-optimization' }
      ]
    }
  ],
  '/multimodal/': [
    {
      text: '多模态',
      items: [
        { text: '多模态总览', link: '/multimodal/' },
        { text: '视觉语言模型', link: '/multimodal/vision-language/vision-language-models' },
        { text: 'CLIP', link: '/multimodal/vision-language/clip' },
        { text: '扩散模型', link: '/multimodal/diffusion/diffusion-models' },
        { text: '多模态对齐', link: '/multimodal/alignment/multimodal-alignment' }
      ]
    }
  ],
  '/world-models/': [
    {
      text: '世界模型',
      items: [
        { text: '世界模型总览', link: '/world-models/' },
        { text: '世界模型基础', link: '/world-models/basics/world-model-basics' },
        { text: '状态空间模型', link: '/world-models/basics/state-space-models' },
        { text: '模型预测控制', link: '/world-models/control/model-predictive-control' }
      ]
    }
  ],
  '/embodied-ai/': [
    {
      text: '具身智能',
      items: [
        { text: '具身智能总览', link: '/embodied-ai/' },
        { text: '感知决策闭环', link: '/embodied-ai/basics/perception-action-loop' },
        { text: '强化学习基础', link: '/embodied-ai/basics/reinforcement-learning' },
        { text: '机器人基础', link: '/embodied-ai/robotics/robotics-basics' }
      ]
    }
  ],
  '/systems/': [
    {
      text: '系统与部署',
      items: [
        { text: '系统总览', link: '/systems/' },
        { text: '分布式训练', link: '/systems/training/distributed-training' },
        { text: '并行策略', link: '/systems/training/parallelism' },
        { text: '推理服务', link: '/systems/inference/serving' },
        { text: '量化与压缩', link: '/systems/inference/quantization' }
      ]
    }
  ],
  '/research-methods/': [
    {
      text: '研究方法',
      items: [
        { text: '研究方法总览', link: '/research-methods/' },
        { text: '论文阅读', link: '/research-methods/paper-reading' },
        { text: '实验设计', link: '/research-methods/experiment-design' },
        { text: '复现清单', link: '/research-methods/reproduction-checklist' }
      ]
    }
  ]
}

const enSidebar = {
  '/en/foundations/': [
    {
      text: 'Foundations',
      collapsed: false,
      items: [
        { text: 'Math Foundations', link: '/en/foundations/math/' },
        { text: 'Programming Foundations', link: '/en/foundations/programming/' },
        { text: 'Machine Learning', link: '/en/foundations/ml/' }
      ]
    }
  ],
  '/en/nlp/': [{ text: 'NLP', items: [{ text: 'Overview', link: '/en/nlp/' }] }],
  '/en/architectures/': [{ text: 'Architectures', items: [{ text: 'Overview', link: '/en/architectures/' }] }],
  '/en/llm/': [{ text: 'LLM', items: [{ text: 'Overview', link: '/en/llm/' }] }],
  '/en/multimodal/': [{ text: 'Multimodal', items: [{ text: 'Overview', link: '/en/multimodal/' }] }],
  '/en/world-models/': [{ text: 'World Models', items: [{ text: 'Overview', link: '/en/world-models/' }] }],
  '/en/embodied-ai/': [{ text: 'Embodied AI', items: [{ text: 'Overview', link: '/en/embodied-ai/' }] }],
  '/en/systems/': [{ text: 'Systems', items: [{ text: 'Overview', link: '/en/systems/' }] }],
  '/en/research-methods/': [{ text: 'Research Methods', items: [{ text: 'Overview', link: '/en/research-methods/' }] }]
}

export default defineConfig({
  title: 'AI Knowledge Graph',
  description: 'A structured AI knowledge base for NLP, LLMs, multimodal AI, world models, and embodied AI.',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true
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
      title: 'AI Knowledge Graph',
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
      title: 'AI Knowledge Graph',
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
