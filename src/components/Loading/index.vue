<template>
  <div class="loading-container">
      <img src="@/assets/loading.svg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '~@/styles/minix.less';

.loading-container{
    width: 100%;
    height: 100%;
    img{
        .self-center();
    }
}
</style>