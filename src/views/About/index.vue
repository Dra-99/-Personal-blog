<template>
  <div class="about-container" v-loading="loading || !isLoaded">
    <iframe class="iframe" @load="isLoaded = true" :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      isLoaded: false
    }
  },
  computed: mapState('about', {
    src: "data",
    loading: "loading"
  }),
  created() {
    this.$store.dispatch('about/about');
  }
}
</script>

<style scoped lang="less">
.about-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.iframe{
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>