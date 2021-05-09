<template>
  <div>
      <!-- 我们在进行属性值的传递时，我们需要分清子组件接受的属性值的类型
    如下，url为字符串类型，因此我们在下面直接传入url即可，这时url是字符串类型
    如下，我们也传入了size属性，不过我们传入的该属性时进行了绑定，这是我们传递值
    的时候，双引号中我们传入的是js表达式，因此此时100不是字符串，想要传入字符串我们应该
    使用:size="'100'" -->
    <Avatar 
      url="https://img2.baidu.com/it/u=2590128318,632998727&fm=26&fmt=auto&gp=0.jpg"
      :size="100"
    />
  </div>
</template>

<script>
import Avatar from './';


export default {
  name: 'App',
  components: {
    Avatar,
  },
}
</script>

<style scoped>

</style>
