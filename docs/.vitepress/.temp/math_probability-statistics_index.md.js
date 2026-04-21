import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"概率论与数理统计","description":"","frontmatter":{},"headers":[],"relativePath":"math/probability-statistics/index.md","filePath":"math/probability-statistics/index.md","lastUpdated":1776678289000}');
const _sfc_main = { name: "math/probability-statistics/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="概率论与数理统计" tabindex="-1">概率论与数理统计 <a class="header-anchor" href="#概率论与数理统计" aria-label="Permalink to &quot;概率论与数理统计&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./probability-distributions">概率分布</a></li><li><a href="./conditional-probability-bayes">条件概率与 Bayes</a></li><li><a href="./random-variables-expectation-variance">随机变量、期望与方差</a></li><li><a href="./mle-map">MLE 与 MAP</a></li><li><a href="./generalization-and-evaluation">泛化与评估</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("math/probability-statistics/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
