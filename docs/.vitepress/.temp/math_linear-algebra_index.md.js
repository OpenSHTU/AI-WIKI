import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"线性代数","description":"","frontmatter":{},"headers":[],"relativePath":"math/linear-algebra/index.md","filePath":"math/linear-algebra/index.md","lastUpdated":1776747852000}');
const _sfc_main = { name: "math/linear-algebra/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="线性代数" tabindex="-1">线性代数 <a class="header-anchor" href="#线性代数" aria-label="Permalink to &quot;线性代数&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./vectors-matrices-tensors">矩阵与线性方程组</a></li><li><a href="./vector-spaces">线性空间</a></li><li><a href="./linear-transformations">线性变换</a></li><li><a href="./eigen-svd-low-rank">矩阵的谱与性质</a></li><li><a href="./inner-product-norm-similarity">内积空间</a></li><li><a href="./matrix-calculus">矩阵微积分</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("math/linear-algebra/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
