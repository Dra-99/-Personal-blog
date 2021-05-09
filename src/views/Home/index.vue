<template>
  <div v-loading="loading" class="home-container" ref="container" @wheel="handleWheel">
    <ul class="carouse-area" :style="{marginTop}" @transitionend="handleTransition">
      <li v-for="item in data" :key="item.id">
        <carouse-item :carouse="item"></carouse-item>
      </li>
      <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index >= 1">
        <Icon type="arrowUp" />
      </div>
      <div class="icon icon-down" @click="switchTo(index + 1)" v-show="index < data.length - 1">
        <Icon type="arrowDown" />
      </div>
      <ul class="dots">
        <li class="btns" :class="{selected: index == i}" @click="switchTo(i)" v-for="(item, i) in data" :key="item.id"></li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getBanner } from '@/api/banner';
import CarouseItem from './CarouseItem';
import Icon from '@/components/Icon';

export default {
  components: {
    CarouseItem,
    Icon,
  },
  data() {
    return {
      clientHeight: 0, //屏幕高度
      index: 0, //图片开始位置
      isWheel: false, //用来规定滚轮滑动状态
    }
  },
  methods: {
    async fetchData() {
      return await getBanner();
    },
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if(this.isWheel) {
        return;
      }
      if(e.deltaY <= -125 && this.index > 0) {
        this.index--;
        this.isWheel = true;
      }else if(e.deltaY >= 125 && this.index < this.data.length - 1) {
        this.index++;
        this.isWheel = true;
      }
    },
    handleTransition() {
      this.isWheel = false;
    },
    handleSize() {
      this.clientHeight = this.$refs.container.clientHeight;
    }
  },
  // 在挂载完毕后获取dom
  mounted() {
    this.clientHeight = this.$refs.container.clientHeight;
    // console.log(this.clientHeight);
    window.addEventListener("resize", this.handleSize);
  },
  // 销毁监听事件，有监听必有销毁
  destroyed() {
    window.removeEventListener("resize", this.handleSize);
  },
  created() {
    this.$store.dispatch('banner/banner');
  },
  // 利用计算属性来轮播图片
  computed: {
    marginTop() {
      return -this.index*this.clientHeight + 'px';
    },
    ...mapState('banner', ["loading", "data"])
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/minix.less';
@import '~@/styles/var.less';

.home-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  // background: aqua;
  ul{
    margin: 0;
    padding: 0;
  }
  .carouse-area{
    width: 100%;
    height: 100%;
    transition: .5s;
    li{
      width: 100%;
      height: 100%
    }
  }
  .icon{
    .self-center();
    transform: translateX(-50%);
    font-size: 28px;
    font-weight: 800;
    cursor: pointer;
    color: rgba(0, 0, 0, .5);
    &.icon-up{
      top: 25px;
      animation: jump-up 2s infinite;
    }
    &.icon-down{
      bottom: 25px;
      top: auto;
      animation: jump-down 2s infinite;
    }
  }
  .dots{
    .self-center();
    transform: translateY(-50%);
    right: 20px;
    left: auto;
    .btns{
      cursor: pointer;
      width: 6px;
      height: 6px;
      border: 3px solid #fff;
      border-radius: 50%;
      margin: 5px 0;
      &.selected{
        background: #fff;
      }
  }
  }
  @keyframes jump-up {
    0%{
      transform: translateY(10px);
    }
    50%{
      transform: translateY(-10px);
    }
    100%{
      transform: translateY(10px);
    }
  }
  @keyframes jump-down {
    0%{
      transform: translateY(-10px);
    }
    50%{
      transform: translateY(10px);
    }
    100%{
      transform: translateY(-10px);
    }
  }
}
</style>