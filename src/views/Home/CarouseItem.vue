<template>
  <div class="carouse-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="carouse-img" :style="imgPosition" ref="img">
      <image-loader @load="this.showWords" :src="carouse.bigImg" :placeholder="carouse.midImg"></image-loader>
    </div>
    <div class="title" ref="title">
      {{ carouse.title }}
    </div>
    <div class="desc" ref="desc">
      {{ carouse.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader';

export default {
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: '', //得到的是标题的宽度
      descWidth: '', //得到描述的宽度
      containerSize: null, //内部边框的尺寸
      imgSize: null, //图片的尺寸
      mouseX: 0, //鼠标的X轴坐标
      mouseY: 0, //鼠标的Y轴坐标
    }
  },
  props: ["carouse"],
  // 设置文字动画，在这里操作dom
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    // 调用方法，显示文字
    this.showWords();

    // 得到外层容器的尺寸和图片的尺寸
    this.getSize();
    // 设置初始坐标居中
    this.mouseX = this.center.centerX;
    this.mouseY = this.center.centerY;

    // 当容器视口宽高发生改变时，我们监听图片和外层容器的变化
    window.addEventListener("resize", this.getSize);

    // console.log(this.containerSize, this.imgSize);
  },
  destroyed() {
    // console.log(12);
    window.removeEventListener("resize", this.getSize);
  },
  computed: {
    imgPosition() {
      if(!this.containerSize || !this.imgSize) {
        return;
      }
      // 这里得到的是最大的多出的宽度和高度
      const extraX = this.imgSize.width - this.containerSize.width;
      const extraY = this.imgSize.height - this.containerSize.height; 
      let left = this.mouseX * ( -extraX / this.containerSize.width );
      let top = this.mouseY * ( -extraY / this.containerSize.height );
      return {
        transform: `translate(${left}px, ${top}px)`
      }
    },
    center() {
      return {
        centerX: this.containerSize.width / 2,
        centerY: this.containerSize.height / 2
      }
    }
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制刷新
      this.$refs.title.clientWidth; //reflow
      this.$refs.title.style.width = this.titleWidth + 'px';
      this.$refs.title.style.transition = "2s";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 强制刷新
      this.$refs.desc.clientWidth; //reflow
      this.$refs.desc.style.width = this.descWidth + 'px';
      this.$refs.desc.style.transition = "2s 1s";
    },
    // 为了更多地考虑，如果我们外层容器按照百分比来设置宽高，外层容器宽高会随着视口的改变而改变
    // 这里我们便要监听视口变化，来动态改变外层容器和图片的宽高
    getSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      },
      this.imgSize = {
        width: this.$refs.img.clientWidth,
        height: this.$refs.img.clientHeight
      }
    },
    handleMouseMove(e) {
      // 鼠标距离浏览器是视口的距离
      // console.log(e.clientX, e.clientY);
      // 我们还可以得到外层容器距离视口的距离
      // 使用下面方法得到矩形框距离视口的距离
      const rect = this.$refs.container.getBoundingClientRect();
      // console.log(rect.left, rect.top);

      // 我们可以得到鼠标在外层容器中的的坐标
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;

    },
    handleMouseLeave() {
      this.mouseX = this.center.centerX;
      this.mouseY = this.center.centerY;
    }
  }
}
</script>

<style lang="less" scoped>
.carouse-item-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .carouse-img{
    width: 110%;
    height: 110%;
    transition: 0.2s;
    left: 0;
    top: 0;
    position: absolute;
  }
  .title,.desc{
    position: absolute;
    top: 50%;
    color: #fff;
    left: auto;
    letter-spacing: 3px;
    left: 25px;
    text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .title{
    top: calc(50% - 50px);
    font-size: 2em;
  }
  .desc{
    top: calc(50% + 20px);
    font-size: 1.2em;
  }
}
</style>