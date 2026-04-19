<template>
  <section class="home-showcase">
    <header class="home-showcase__hero">
      <p class="home-showcase__kicker">Learning Blueprint</p>
      <h2>重建学习首页风格：清晰、克制、可导航。</h2>
      <p>
        先看路线，再进专题。把基础、模型、前沿和系统拆成四条可执行路径，避免首页信息拥挤。
      </p>
      <div class="home-showcase__chips">
        <a v-for="chip in chips" :key="chip.title" :href="chip.link">{{ chip.title }}</a>
      </div>
    </header>

    <div class="home-showcase__grid">
      <a v-for="card in pathways" :key="card.title" :href="card.link" class="home-showcase__pathway">
        <span>{{ card.step }}</span>
        <h3>{{ card.title }}</h3>
        <p>{{ card.desc }}</p>
      </a>

      <aside class="home-showcase__panel">
        <h3>研究节奏</h3>
        <ol>
          <li v-for="stage in stages" :key="stage.title">
            <strong>{{ stage.title }}</strong>
            <span>{{ stage.desc }}</span>
          </li>
        </ol>
        <div class="home-showcase__stats">
          <div>
            <strong>9+</strong>
            <span>主题模块</span>
          </div>
          <div>
            <strong>2</strong>
            <span>语言入口</span>
          </div>
          <div>
            <strong>持续</strong>
            <span>迭代更新</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
const chips = [
  { title: 'Start Here', link: '/start-here' },
  { title: 'Knowledge Map', link: '/knowledge-map' },
  { title: 'Papers', link: '/papers' },
  { title: 'Research Methods', link: '/research-methods/' }
]

const pathways = [
  {
    step: '01',
    title: '基础层 Foundations',
    desc: '数学、概率、优化、编程和机器学习，建立统一术语和推导能力。',
    link: '/foundations/math/'
  },
  {
    step: '02',
    title: '模型层 LLM/NLP',
    desc: '从表示学习到 Transformer、预训练、对齐、RAG 与 Agent。',
    link: '/llm/'
  },
  {
    step: '03',
    title: '前沿层 Multimodal',
    desc: '多模态、世界模型、具身智能，连接感知、规划和控制。',
    link: '/multimodal/'
  },
  {
    step: '04',
    title: '工程层 Systems',
    desc: '训练并行、推理优化、部署链路，把知识映射到真实系统。',
    link: '/systems/'
  }
]

const stages = [
  { title: '读', desc: '建立论文筛选与速读习惯，快速定位关键贡献。' },
  { title: '做', desc: '通过最小实验复现主要结论，记录误差来源。' },
  { title: '连', desc: '把新知识挂接到已有图谱，持续修订学习路线。' }
]
</script>

<style scoped>
.home-showcase {
  width: min(1180px, calc(100% - 40px));
  margin: 2rem auto 4rem;
  position: relative;
  z-index: 2;
}

.home-showcase__hero {
  padding: 1.6rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 14px;
  background:
    linear-gradient(130deg, color-mix(in srgb, var(--akg-blue) 8%, transparent), transparent 55%),
    color-mix(in srgb, var(--vp-c-bg-elv) 86%, transparent);
}

.home-showcase__kicker {
  margin: 0;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 800;
  color: var(--akg-sapphire);
}

.home-showcase__hero h2 {
  margin: 0.4rem 0 0.55rem;
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  line-height: 1.2;
  color: var(--vp-c-text-1);
}

.home-showcase__hero > p {
  margin: 0;
  color: var(--vp-c-text-2);
  max-width: 760px;
  line-height: 1.72;
}

.home-showcase__chips {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.home-showcase__chips a {
  text-decoration: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  padding: 0.38rem 0.8rem;
  color: var(--vp-c-text-1);
  font-size: 0.82rem;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 80%, transparent);
  transition: border-color 180ms ease, transform 180ms ease;
}

.home-showcase__chips a:hover {
  border-color: color-mix(in srgb, var(--akg-sapphire) 56%, var(--vp-c-border));
  transform: translateY(-2px);
}

.home-showcase__grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 14px;
}

.home-showcase__pathway {
  grid-column: span 4;
  text-decoration: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1rem;
  background: color-mix(in srgb, var(--vp-c-bg-elv) 82%, transparent);
  transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

.home-showcase__pathway:hover {
  border-color: color-mix(in srgb, var(--akg-teal) 52%, var(--vp-c-border));
  transform: translateY(-2px);
  box-shadow: 0 14px 28px color-mix(in srgb, var(--akg-crust) 26%, transparent);
}

.home-showcase__pathway span {
  display: block;
  color: var(--akg-sapphire);
  font-weight: 800;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
}

.home-showcase__pathway h3 {
  margin: 0.5rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}

.home-showcase__pathway p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  font-size: 0.92rem;
}

.home-showcase__panel {
  grid-column: span 12;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1rem;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--akg-teal) 7%, transparent), transparent 65%),
    color-mix(in srgb, var(--vp-c-bg-elv) 84%, transparent);
}

.home-showcase__panel h3 {
  margin: 0 0 0.7rem;
  color: var(--vp-c-text-1);
  font-size: 1.02rem;
}

.home-showcase__panel ol {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.55rem;
}

.home-showcase__panel li {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.home-showcase__panel strong {
  margin-right: 0.38rem;
  color: var(--vp-c-text-1);
}

.home-showcase__stats {
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.home-showcase__stats div {
  border: 1px solid color-mix(in srgb, var(--akg-sapphire) 24%, var(--vp-c-border));
  border-radius: 10px;
  padding: 0.7rem;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 82%, transparent);
}

.home-showcase__stats strong {
  display: block;
  color: var(--akg-sapphire);
  font-size: 1.05rem;
}

.home-showcase__stats span {
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
}

@media (max-width: 960px) {
  .home-showcase__pathway {
    grid-column: span 6;
  }
}

@media (max-width: 680px) {
  .home-showcase {
    width: min(100% - 24px, 1180px);
  }

  .home-showcase__hero {
    padding: 1.1rem;
  }

  .home-showcase__pathway,
  .home-showcase__panel {
    grid-column: span 12;
  }

  .home-showcase__stats {
    grid-template-columns: 1fr;
  }
}
</style>
