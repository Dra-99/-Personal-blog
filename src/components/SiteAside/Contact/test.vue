<template>
  <div class="test-container">
      <Contact />
  </div>
</template>

<script>
import Contact from './'

export default {
    components: {
        Contact,
    }
}
</script>

<style lang="less" scoped>
.test-container{
    width: 400px;
    height: 400px;
    background-color: #000;
    border: 1px solid #000;
    margin: 0 auto;
    padding-top: 200px;
}
</style>