<template>
  <ul class="form-list-container">
      <li class="des-area" v-for="item in list" :key="item.id">
          <Avatar 
            :url="item.avatar"
            :size="44" />
          <div class="info">
              <div class="nickName">{{item.nickname}}</div>
              <div class="des">{{item.content}}</div>
              <div class="date">{{formatDate(item.createDate, true)}}</div>
          </div>
      </li>
  </ul>
</template>

<script>
import Avatar from '../Avatar/index';
import '@/styles/global.less';
import formatDate from '@/utils/formatDate';

export default {
    components: {
        Avatar
    },
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    methods: {
        formatDate
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

ul, li{
    margin: 0;
    padding: 0;
}
.form-list-container{
    margin: 10px 0;
}
.des-area{
    display: flex;
    margin: 10px 30px;
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid lighten(@gray, 20%);
    padding: 15px;
}
.info{
    margin-left: 15px;
}
.info .nickName{
    margin-bottom: 10px;
    color: @warn;
}
.info .des{
    font-size: 15px;
}
.info .date{
    position: absolute;
    right: 0px;
    padding: 15px;
    top: 0px;
    font-size: 14px;
    color: @gray;
}
</style>