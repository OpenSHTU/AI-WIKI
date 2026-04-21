import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"微积分","description":"","frontmatter":{},"headers":[],"relativePath":"math/calculus/index.md","filePath":"math/calculus/index.md","lastUpdated":1776678289000}');
const _sfc_main = { name: "math/calculus/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="微积分" tabindex="-1">微积分 <a class="header-anchor" href="#微积分" aria-label="Permalink to &quot;微积分&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./derivatives-and-gradients">导数与梯度</a></li><li><a href="./partial-derivatives">偏导数</a></li><li><a href="./chain-rule-backpropagation">链式法则与反向传播</a></li><li><a href="./jacobian-and-hessian">Jacobian 与 Hessian</a></li><li><a href="./matrix-calculus">矩阵微积分</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("math/calculus/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
