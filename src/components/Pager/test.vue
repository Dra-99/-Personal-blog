<template>
  <div>
    <Pager :total="total" :current="current" @changePage="changePage"/>
  </div>
</template>

<script>
import Pager from './'

export default {
  name: 'App',
  components: {
    Pager
  },
  data() {
    return {
      total: 340,
      current: 1
    }
  },
  methods: {
    changePage(newPage) {
      this.current = newPage;
      console.log('父组件时间处理')
    } 
  }
}
</script>

<style scoped>

</style>
