import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jacobian 与 Hessian","description":"","frontmatter":{},"headers":[],"relativePath":"math/calculus/jacobian-and-hessian.md","filePath":"math/calculus/jacobian-and-hessian.md","lastUpdated":1776678289000}');
const _sfc_main = { name: "math/calculus/jacobian-and-hessian.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jacobian-与-hessian" tabindex="-1">Jacobian 与 Hessian <a class="header-anchor" href="#jacobian-与-hessian" aria-label="Permalink to &quot;Jacobian 与 Hessian&quot;">​</a></h1><h2 id="它在-ai-中解决什么问题" tabindex="-1">它在 AI 中解决什么问题？ <a class="header-anchor" href="#它在-ai-中解决什么问题" aria-label="Permalink to &quot;它在 AI 中解决什么问题？&quot;">​</a></h2><p>占位说明：解释多输入多输出函数的导数结构，以及二阶信息如何描述曲率。</p><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><ul><li>待补：Jacobian</li><li>待补：Hessian</li><li>待补：curvature</li></ul><h2 id="关键公式" tabindex="-1">关键公式 <a class="header-anchor" href="#关键公式" aria-label="Permalink to &quot;关键公式&quot;">​</a></h2><p>待补：Jacobian matrix、Hessian matrix、second-order approximation。</p><h2 id="它出现在模型的哪里" tabindex="-1">它出现在模型的哪里？ <a class="header-anchor" href="#它出现在模型的哪里" aria-label="Permalink to &quot;它出现在模型的哪里？&quot;">​</a></h2><ul><li>待补：vector-valued model output</li><li>待补：loss landscape</li><li>待补：second-order optimization analysis</li></ul><h2 id="后续需要补充" tabindex="-1">后续需要补充 <a class="header-anchor" href="#后续需要补充" aria-label="Permalink to &quot;后续需要补充&quot;">​</a></h2><ul><li>待补：定义</li><li>待补：直觉</li><li>待补：例子</li><li>待补：常见误区</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("math/calculus/jacobian-and-hessian.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jacobianAndHessian = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jacobianAndHessian as default
};
