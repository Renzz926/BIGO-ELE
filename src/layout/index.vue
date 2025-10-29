<template>
  <div class="app-wrapper">
    <app-main />
  </div>
</template>

<script setup lang="ts">
import router from '../router/index';
import AppMain from './components/AppMain.vue';
if (window.document.body.clientWidth > 1200) {
  router.push('/pc');
} else {
  router.push('/h5');
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixin.scss';
@use '@/assets/styles/variables.module.scss' as *;

.app-wrapper {
  @include mixin.clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$base-sidebar-width});
  transition: width 0.28s;
  background: $fixed-header-bg;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.sidebarHide .fixed-header {
  width: 100%;
}

.mobile .fixed-header {
  width: 100%;
}
</style>
