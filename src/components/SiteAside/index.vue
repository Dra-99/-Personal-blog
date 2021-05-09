<template>
  <div class="siteaside-container">
      <template v-if="data">
        <Avatar :url="data.avatar" />
        <h1 class="title">{{data.siteTitle}}</h1>
      </template>
      <Menu />
      <Contact v-if="data"/>
      <p class="text" v-if="data">
          {{data.icp}}
      </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Avatar from '@/components/Avatar'
import Contact from './Contact/index'
import Menu from './Menu/index'

export default {
    components: {
        Avatar,
        Contact,
        Menu
    },
    computed: {
        ...mapState('setting', ["data"])
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.siteaside-container{
    width: 100%;
    height: 100%;
    background-color: @dark;
    box-sizing: border-box;
    padding: 20px 0;
    overflow-x: hidden;
    overflow-y: auto;
}
.avatar-container{
    margin: 0 auto;
}
.text{
    text-align: center;
    color: darken(@gray, 40%);
    font-size: 12px;
    margin-top: 25px;
}
.title{
    font-size: 16px;
    text-align: center;
    color: #fff;
}
</style>