<template>
  <div id="app">
    <AppNav />
    <router-view class="page" />
  </div>
</template>
<style lang="scss">
@import './assets/styles/global.scss';
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
<script>
import AppNav from './components/AppNav.vue';

export default {
  components: { AppNav },
};
</script>
