<template>
  <div class="layout-container">
      <div class="left">
         <slot name="left"></slot> 
      </div>
      <div class="main">
          <slot></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-container{
    width: 100%;
    height: 100%;
    display: flex;
    // main可以根据屏幕尺寸进行扩展，压缩
    .main{
        flex: 1 1 auto;
    }
    // left，right不允许进行扩展，压缩，固定宽高
    .left, .right{
        flex: 0 0 auto;
    }
}
</style>