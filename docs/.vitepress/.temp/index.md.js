import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Structured AI learning wiki and","text":"knowledge graph for modern researchers.","tagline":"全栈式 AI 知识库，涵盖机器学习、深度学习、自然语言处理与数学基础。将碎片化的前沿学习系统化构建为连贯的知识图谱。","actions":[{"theme":"brand","text":"开始探索","link":"/start-here"},{"theme":"alt","text":"GitHub 源代码","link":"https://github.com/OpenSHTU/AI-WIKI"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1776678289000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="repo-content-wrapper"><h2 id="关于-ai-knowledge-graph" tabindex="-1">关于 AI Knowledge Graph <a class="header-anchor" href="#关于-ai-knowledge-graph" aria-label="Permalink to &quot;关于 AI Knowledge Graph&quot;">​</a></h2><p><strong>AI Knowledge Graph</strong> 是一个系统化的全栈 AI 知识库，旨在连接人工智能领域的理论基础与前沿应用。内容涵盖广泛，包括机器学习、深度学习、强化学习，以及支撑这些算法的数学基础（如线性代数、概率论与数值优化）等核心领域。</p><h2 id="建设宗旨" tabindex="-1">建设宗旨 <a class="header-anchor" href="#建设宗旨" aria-label="Permalink to &quot;建设宗旨&quot;">​</a></h2><p>在深入学习人工智能的过程中，学习者常常受困于算法知识的碎片化以及沉厚的数学背景要求。这些知识盲区不仅阻碍了对前沿技术的理解，也经常成为 AI 领域探索之旅中的瓶颈。</p><p>本项目致力于打造一个结构化的知识图谱，帮助研究者和开发者组织、连接并可视化 AI 研究中的核心概念。无论是自然语言处理 (NLP)、计算机视觉 (CV)、计算机图形学 (CG)，还是任何下游的深度学习任务，本维基都旨在系统性地收集和整合基础与高级知识，打通从数学原理到技术落地的学习路径。</p><blockquote><p>这是一个持续演进的开源知识生态。我们真诚地欢迎开源社区的同行们共同参与建设，通过提交 Pull Request (PR) 来不断完善它。让我们共同学习，一起成长！</p></blockquote><hr><h2 id="知识导航" tabindex="-1">知识导航 <a class="header-anchor" href="#知识导航" aria-label="Permalink to &quot;知识导航&quot;">​</a></h2><p>您可以通过以下方式在本维基中展开探索：</p><ul><li><strong>底层基石</strong>：涵盖微积分、线性代数、概率论以及机器学习的数学推导。</li><li><strong>模型架构</strong>：深入理解 NLP、CV 以及主流深度学习网络的设计。</li><li><strong>前沿探索</strong>：密切追踪 Transformer, RAG, Agent, 多模态架构与具身智能的发展。</li></ul><h2 id="✨-愿景" tabindex="-1">✨ 愿景 <a class="header-anchor" href="#✨-愿景" aria-label="Permalink to &quot;✨ 愿景&quot;">​</a></h2><blockquote><p>我们希望这个知识库能成为 AI 学习者长期的伴侣——将每一份零散的学习笔记转化为互相关联的知识节点，为每一位探索者构建出清晰宏大的 AI 理解宇宙。</p></blockquote></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
