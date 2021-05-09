<template>
<!-- 关于v-if 和 v-show的使用，两者都是进行dom节点的显示与隐藏的，使用v-if会使我们的dom节点在隐藏式
直接把该dom节点去掉，减少了隐藏状态时dom节点的渲染，提升效率，但是会导致dom节点数不稳定，使用v-show进行
dom节点的显示与隐藏时在我们将该dom节点隐藏时，dom节点并不会去掉，而是v-show为该节点加上了display:none属性
，因此，在隐藏状态时，dom节点仍然需要渲染，因此，如果我们的某个节点的显示与隐藏随某个条件的改变，并且该条件
变化较为迅速时我们可以使用v-show，如果条件变化缓慢，我们可以使用v-if -->
  <div class="pager-container" v-if="allPages > 1">
    <a @click.prevent="handleClick(1)" :class="{noClick: current === 1}">|&lt;&lt;</a>
    <a @click.prevent="handleClick(current - 1)" :class="{noClick: current === 1}">&lt;&lt;</a>
    <a @click.prevent="handleClick(page)" v-for="(page, index) in numbers" :key="index" :class="{active: page === current}">{{page}}</a>
    <a @click.prevent="handleClick(current + 1)" :class="{noClick: current === allPages}">&gt;&gt;</a>
    <a @click.prevent="handleClick(allPages)" :class="{noClick: current === allPages}">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1
    },
    // 总数据量
    total: {
      type: Number,
      default: 0
    },
    // 页容量
    limit: {
      type: Number,
      default: 10
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    // 获取总共的页码数
    allPages() {
      return Math.ceil(this.total / this.limit);
    },
    // 获取可见页码中最小的页码
    // 我们可以用当前页码减去可见页码总数除以2进行计算
    visibleMin() {
      let min = Math.floor(this.current - this.visibleNumber / 2);
      if(min < 1) {
        min = 1
      }
      return min;
    },
    // 获取可见页码中最大页码数
    // 我们可以使用最小页码加上可见页码总数减1来计算
    // 为什么不直接减去9呢，为了数据响应式
    visibleMax() {
      let max = Math.floor(this.visibleMin + this.visibleNumber - 1);
      if(max > this.allPages) {
        max = this.allPages;
      }
      return max;
    },
    // 我们获取最小页码和最大页码的目的是为了将最大页码之间和最小页码之间的页码数整理为一个数组
    // 便于渲染我们的页码
    numbers() {
      const numbers = [];
      for(let i = this.visibleMin; i <= this.visibleMax; i++) {
        numbers.push(i);
      }
      return numbers;
    }
  },
  methods: {
    // 点击页面按钮，改变当前页码，使用$emit向父组件传递事件
    handleClick(newPage) {
      if(newPage < 1) {
        newPage = 1;
      }
      if(newPage > this.allPages) {
        newPage = this.allPages;
      }
      if(newPage === this.current) {
        return;
      }
      this.$emit('changePage', newPage)
    }
  }
};
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');
.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 10px;
    a{
        margin: 0 5px;
        cursor: pointer;
        &.noClick {
          color: @lightWords;
          cursor: not-allowed;
        }
        &.active{
          color: @primary;
          font-weight: bold;
        }
    }
}
</style>