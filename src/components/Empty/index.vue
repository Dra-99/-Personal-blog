<template>
  <div class="empty-container">
      <Icon type="empty"/>
      <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon'

export default {
    components: {
        Icon,
    },
    props: {
        text: {
            type: String,
            default: '无数据'
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/minix.less';
@import '~@/styles/var.less';

.empty-container{
    // 样式混入，使用方法
    .self-center();
    text-align: center;
    color: @gray;
    p{
        font-weight: bold;
        font-size: 20px;
    }
}
.icon-container{
    font-size: 72px;
}
</style>
