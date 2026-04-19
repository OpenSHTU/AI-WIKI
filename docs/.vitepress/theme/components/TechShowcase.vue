<template>
  <section class="tech-showcase">
    <div class="tech-showcase__head">
      <p>Feature Blocks</p>
      <h2>Build A Practical AI Learning Stack</h2>
      <span>用六个主题入口组织首页导航，避免视觉碎片化。</span>
    </div>

    <div class="tech-showcase__grid">
      <a
        v-for="(item, index) in items"
        :key="item.title"
        :href="item.link"
        class="tech-showcase__card"
        :style="{ '--d': `${index * 100}ms` }"
      >
        <div class="tech-showcase__icon">{{ item.icon }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <strong>{{ item.tag }}</strong>
      </a>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    icon: 'LM',
    title: 'LLM Foundations',
    desc: '从 tokenizer、pretraining 到 alignment，建立大模型知识主线。',
    tag: 'Core',
    link: '/llm/'
  },
  {
    icon: 'DF',
    title: 'Diffusion And Generation',
    desc: '掌握扩散模型基本机制与视觉生成实践。',
    tag: 'Visual',
    link: '/multimodal/diffusion/diffusion-models'
  },
  {
    icon: 'MM',
    title: 'Multimodal Systems',
    desc: '连接视觉与语言，理解跨模态训练和评估方法。',
    tag: 'Bridge',
    link: '/multimodal/'
  },
  {
    icon: 'EA',
    title: 'Embodied Intelligence',
    desc: '围绕感知、决策、控制构建具身智能知识框架。',
    tag: 'Action',
    link: '/embodied-ai/'
  },
  {
    icon: 'IE',
    title: 'Inference Engineering',
    desc: '聚焦模型部署、压缩、推理优化与系统落地。',
    tag: 'Deploy',
    link: '/systems/'
  },
  {
    icon: 'RM',
    title: 'Research Methods',
    desc: '建立论文阅读、实验复现与报告沉淀的闭环流程。',
    tag: 'Method',
    link: '/research-methods/'
  }
]
</script>

<style scoped>
.tech-showcase {
  width: min(1160px, calc(100% - 40px));
  margin: 1rem auto 4.6rem;
}

.tech-showcase__head {
  margin-bottom: 1rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  background: color-mix(in srgb, var(--vp-c-bg-elv) 86%, transparent);
}

.tech-showcase__head p {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.tech-showcase__head h2 {
  margin: 0.38rem 0;
  color: var(--vp-c-text-1);
  font-size: clamp(1.3rem, 2.2vw, 1.9rem);
}

.tech-showcase__head span {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.tech-showcase__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.tech-showcase__card {
  text-decoration: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 14px;
  padding: 0.95rem;
  background: color-mix(in srgb, var(--vp-c-bg-elv) 88%, transparent);
  box-shadow: 0 10px 22px color-mix(in srgb, var(--akg-shadow) 60%, transparent);
  animation: enter 460ms ease both;
  animation-delay: var(--d);
  transition: transform 170ms ease, box-shadow 170ms ease;
}

.tech-showcase__card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 28px color-mix(in srgb, var(--akg-shadow) 78%, transparent);
}

.tech-showcase__icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
  background: color-mix(in srgb, var(--vp-c-brand-soft) 70%, transparent);
  color: var(--vp-c-brand-1);
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.tech-showcase__card h3 {
  margin: 0.65rem 0 0.3rem;
  color: var(--vp-c-text-1);
  font-size: 1.02rem;
}

.tech-showcase__card p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 0.88rem;
}

.tech-showcase__card strong {
  display: inline-block;
  margin-top: 0.58rem;
  padding: 0.22rem 0.55rem;
  border-radius: 999px;
  font-size: 0.74rem;
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-soft) 78%, transparent);
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .tech-showcase__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .tech-showcase {
    width: min(100% - 24px, 1160px);
  }

  .tech-showcase__grid {
    grid-template-columns: 1fr;
  }
}
</style>
