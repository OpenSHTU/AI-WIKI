<template>
  <DefaultTheme.Layout>
    <template #home-hero-info-before>
      <pre class="ascii-art" aria-hidden="true">
 █████╗ ██╗    ██╗    ██╗██╗██╗  ██╗██╗
██╔══██╗██║    ██║    ██║██║██║ ██╔╝██║
███████║██║    ██║ █╗ ██║██║█████╔╝ ██║
██╔══██║██║    ██║███╗██║██║██╔═██╗ ██║
██║  ██║██║    ╚███╔███╔╝██║██║  ██╗██║
╚═╝  ╚═╝╚═╝     ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝╚═╝
      </pre>
    </template>
    <template #home-hero-before>
      <HomeBackdrop />
    </template>
    <template #home-features-before>
      <div class="repo-badges">
        <span class="badge badge-release"><span class="lbl">release</span><span class="val">v0.1.0</span></span>
        <span class="badge badge-stars"><span class="lbl">stars</span><span class="val">1024</span></span>
        <span class="badge badge-license"><span class="lbl">license</span><span class="val">MIT</span></span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import HomeBackdrop from './components/HomeBackdrop.vue'
</script>

<style scoped>
.repo-badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: -30px;
  margin-bottom: 20px;
  font-family: ui-monospace, SFMono-Regular, "Courier New", Courier, monospace;
}

.badge {
  display: flex;
  font-size: 11px;
  border-radius: 4px;
  overflow: hidden;
  font-weight: 600;
}

.badge .lbl {
  background: #555;
  color: #fff;
  padding: 3px 6px;
}

.badge-release .val {
  background: var(--akg-brand);
  color: #fff;
  padding: 3px 6px;
}

.badge-stars .val {
  background: #f39c12;
  color: #fff;
  padding: 3px 6px;
}

.badge-license .val {
  background: #8e44ad;
  color: #fff;
  padding: 3px 6px;
}

.repo-subtext {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 60px;
  color: var(--vp-c-text-2);
  font-size: 15px;
  line-height: 1.6;
}
</style>
