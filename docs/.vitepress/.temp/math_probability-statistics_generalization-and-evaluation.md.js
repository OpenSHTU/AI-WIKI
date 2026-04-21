import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"泛化与评估","description":"","frontmatter":{},"headers":[],"relativePath":"math/probability-statistics/generalization-and-evaluation.md","filePath":"math/probability-statistics/generalization-and-evaluation.md","lastUpdated":1776678289000}');
const _sfc_main = { name: "math/probability-statistics/generalization-and-evaluation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="泛化与评估" tabindex="-1">泛化与评估 <a class="header-anchor" href="#泛化与评估" aria-label="Permalink to &quot;泛化与评估&quot;">​</a></h1><h2 id="它在-ai-中解决什么问题" tabindex="-1">它在 AI 中解决什么问题？ <a class="header-anchor" href="#它在-ai-中解决什么问题" aria-label="Permalink to &quot;它在 AI 中解决什么问题？&quot;">​</a></h2><p>占位说明：解释训练集表现为什么不等于真实能力，以及如何用统计视角评估模型。</p><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><ul><li>待补：generalization</li><li>待补：train / validation / test</li><li>待补：bias-variance tradeoff</li></ul><h2 id="关键公式" tabindex="-1">关键公式 <a class="header-anchor" href="#关键公式" aria-label="Permalink to &quot;关键公式&quot;">​</a></h2><p>待补：train loss、test loss、generalization gap。</p><h2 id="它出现在模型的哪里" tabindex="-1">它出现在模型的哪里？ <a class="header-anchor" href="#它出现在模型的哪里" aria-label="Permalink to &quot;它出现在模型的哪里？&quot;">​</a></h2><ul><li>待补：model selection</li><li>待补：ablation study</li><li>待补：benchmark evaluation</li></ul><h2 id="后续需要补充" tabindex="-1">后续需要补充 <a class="header-anchor" href="#后续需要补充" aria-label="Permalink to &quot;后续需要补充&quot;">​</a></h2><ul><li>待补：定义</li><li>待补：直觉</li><li>待补：例子</li><li>待补：常见误区</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("math/probability-statistics/generalization-and-evaluation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const generalizationAndEvaluation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  generalizationAndEvaluation as default
};
