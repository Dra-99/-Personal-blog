<template>
<!-- 我们想要获取父组件中传入的属性需要将我们要设置该值的属性进行绑定 -->
  <img class="avatar-container" 
    :src="url" 
    :style="{
        height: size + 'px',
        width: size + 'px'
    }"
  >
</template>

<script>
export default {
    props: {
        url: {
            type: String, //规定传入的数据类型
            required: true  //必须要传的属性
        },
        // 规定的是图片的尺寸
        size: {
            type: Number,
            default: 150
        }
    }
}
</script>

<style>
.avatar-container{
    border-radius: 50%;
    /* object-fit对图片进行适当的剪切，使之适应容器尺寸 */
    object-fit: cover;
    display: block;
}
</style>