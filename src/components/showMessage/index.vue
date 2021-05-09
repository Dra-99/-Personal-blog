<template>
  <div class="show-message-container">
      <!-- 将父组件的处理函数直接抛给父组件 -->
      <form-data v-on="$listeners"></form-data>
      <h3 class="title">
          {{title}}
          <span class="subTitle">{{subTitle}}</span>
      </h3>
      <form-list :list="list"></form-list>
      <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import FormData from './formData';
import FormList from './formList';

export default {
    components: {
        FormData,
        FormList
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: () => []
        },
        isListLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
.show-message-container{
    margin: 50px auto;
    width: 100%;

}
.title{
    margin: 15px 30px;
}
.subTitle{
    font-size: 14px;
}
.loading {
  position: relative;
  height: 100px;
}
</style>