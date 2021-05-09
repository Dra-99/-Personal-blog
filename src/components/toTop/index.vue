<template>
  <div @click="handleClick" v-show="show" class="to-top-container">
      top
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    created() {
        this.$bus.$on('mainScroll', this.handleScroll);
    },
    destroyed() {
        this.$bus.$off('mainScroll', this.handleScroll);
    },
    methods: {
        handleScroll(dom) {
            if(!dom) {
                this.show = false;
                return;
            }
            this.show = dom.scrollTop >= 500;
        },
        handleClick() {
            this.$bus.$emit('setMainScroll', 0);
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.to-top-container {
    width: 50px;
    height: 50px;
    background: @primary;
    border-radius: 50%;
    position: fixed;
    z-index: 1000;
    right: 50px;
    bottom: 50px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}
</style>