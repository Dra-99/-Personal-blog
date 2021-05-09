<template>
  <div class="test-container">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from './'

export default {
    components: {
        SiteAside,
    }
}
</script>

<style lang="less" scoped>
.test-container{
    width: 250px;
    height: 780px;
    margin: 0 auto;
}
</style>