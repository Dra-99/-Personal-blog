<template>
  <div class="imageLoader-container">
    <img class="placeholder" v-if="!everythingLoad" :src="placeholder">
    <img @load="handleLoad" :src="src" :style="{ opacity: loading, transition: `${duration}ms` }">
  </div>
</template>

<script>
export default {
    props: {
        // 原始图片路径
        src: {
            type: String,
            required: true
        },
        // 占位图片路径
        placeholder: {
            type: String,
            required: true
        },
        // 占位图片转化为原始图片时长
        duration: {
            type: Number,
            default: 500
        }
    },
    data() {
        return {
            isLoading: false,
            // 占位图片消失的条件
            everythingLoad: false
        }
    },
    methods: {
        handleLoad() {
            this.isLoading = true;
            // 占位图片消失应等到原图完全加载出来
            setTimeout(() => {
                this.everythingLoad = true;
                this.$emit('load');
            }, this.duration)
        }
    },
    computed: {
        loading() {
            return this.isLoading ? 1 : 0;
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/minix.less';

.imageLoader-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img{
        .self-fill();
        object-fit: cover;
    }
    .placeholder{
        filter: blur(2vw);
    }
}
</style>