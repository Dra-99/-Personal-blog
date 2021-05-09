<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <router-view />
      </template>
    </Layout>
    <toTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import toTop from '@/components/toTop';

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    toTop
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/minix.less";
.app-container {
  .self-fill(fixed);
  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>
