<template>
  <nav class="menu-container">
      <router-link
        v-for="item in menuList"
        :key="item.link"
        :to="{name: item.name}"
        :exact="item.exact" 
        active-class="selected"
       >
          <div class="icon">
              <Icon :type="item.icon"/>
          </div>
          <span>{{ item.title }}</span>
      </router-link>
  </nav>
</template>

<script>
import Icon from '@/components/Icon'
import '@/styles/global.less'
export default {
    components: {
        Icon
    },
    data() {
        return {
            menuList: [
                {
                    name: 'Home',
                    title: '首页',
                    icon: 'home',
                    exact: true
                },
                {
                    name: 'Blog',
                    title: '文章',
                    icon: 'blog',
                    exact: false
                },
                {
                    name: 'About',
                    title: '关于我',
                    icon: 'about',
                    exact: true
                },
                {
                    name: 'Project',
                    title: '项目&效果',
                    icon: 'code',
                    exact: true
                },
                {
                    name: 'Message',
                    title: '留言板',
                    icon: 'chat',
                    exact: true
                }
            ]
        }
    },
    methods: {
        // isPathName(item) {
        //     let path = item.link.toLowerCase();
        //     let currentPath = location.pathname.toLowerCase();
        //     if(item.startWith) {
        //         return currentPath.startsWith(path);
        //     }else {
        //         return currentPath === path;   
        //     }
        // }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.menu-container{
    margin: 10px 0;
    a{
        &.selected{
            color: rgb(198, 228, 218);
            font-weight: 600;
            background-color: darken(@words, 5%);
        }
        display: flex;
        align-items: center;
        padding: 0 50px;
        height: 43px;
        line-height: 43fpx;
        color: darken(@gray, 20%);
        font-size: 14px;
        .icon{
            width: 25px;
            font-size: 16px;
        }
    }
}
</style>