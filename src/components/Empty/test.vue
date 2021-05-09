<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from './'

export default {
  name: 'App',
  components: {
    Empty
  },
  data() {
    return {
     
    }
  },
}
</script>

<style lang="less" scoped>
.test-container{
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border: 1px solid #000;
  position: relative;
}
</style>