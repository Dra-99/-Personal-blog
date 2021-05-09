<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边位置</div>
      </template>
      <div class="main">中间位置区域</div>
      <template #right>
        <div class="right">右边位置</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";

export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.test-container {
  width: 1000px;
  height: 600px;
  border: 1px solid;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background: aqua;
}
.main {
  width: 100%;
  height: 100%;
  background: blueviolet;
}
.right {
  width: 150px;
  height: 100%;
  background: chartreuse;
}
</style>