<template>
  <div class="test-container">
      <Loading />
  </div>
</template>

<script>
import Loading from './'

export default {
    components:{
        Loading,
    }
}
</script>

<style lang="less" scoped>
.test-container{
    position: relative;
    width: 100%;
    height: 100%;
}
</style>