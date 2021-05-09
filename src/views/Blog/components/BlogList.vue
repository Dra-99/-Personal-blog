<template>
  <div v-loading="isLoading" ref="container" class="blog-list-container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link :to="{
              name: 'BlogDetail',
              params: {
                id: item.id
              }
            }">
            <img
              v-lazy="item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{
            name: 'BlogDetail',
            params: {
              id: item.id
            }
          }">
            <h2>{{item.title}}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{formatDate(item.createDate)}}</span>
            <span>浏览：{{item.scanNumber}}</span>
            <span>评论：{{item.commentNumber}}</span>
            <router-link :to="{
              name: 'CategoryBlog',
              params: {
                categoryId: item.category.id
              }
            }">{{item.category.name}}</router-link>
          </div>
          <div class="desc">
            {{item.description}}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading" />
    <!-- 分页放到这里 -->
    <Pager v-if="data.total" :current="routeInfo.page" @changePage="handleChangePage" :limit="routeInfo.limit" :visibleNumber="10" :total="data.total"/>
  </div>
</template>

<script>
import Pager from '@/components/Pager';
import fetchData from '@/mixins/fetchData';
import * as blogApi from '@/api/blog';
import { formatDate } from '@/utils';
import mainScroll from '@/mixins/mainScroll';
import Empty from '@/components/Empty';

export default {
  mixins: [fetchData({total: 0, rows: []}), mainScroll("container")],
  components: {
    Pager,
    Empty
  },
  computed: {
    routeInfo() {
      // 转化为数字
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit
      }
    }
  },
  watch: {
    async $route() {
      this.isLoading = true;
      // 设置屏幕向顶部滚动
      this.$refs.container.scrollTop = 0;
      this.data = await blogApi.getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId);
      this.isLoading = false;
    }
  },
  // mounted() {
  //     this.$bus.$on('setMainScroll', this.handleClick);
  //     this.$refs.container.addEventListener('scroll', this.handleScroll);
  // },
  // beforeDestroy() {
  //   this.$bus.$emit('mainScroll');
  //   this.$refs.container.removeEventListener('scroll', this.handleScroll);
  //   this.$bus.$off('setMainScroll', this.handleClick);
  // },
  methods: {
    formatDate,
    async fetchData() {
      return await blogApi.getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId);
    },
    handleChangePage(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit
      }
      // console.log(newPage);
      // 我们得到新的页面来实现页面跳转
      // 根据有无分类来进行跳转
      // 无分类
      // /article?page=`${newPage}`&limit=`${this.routeInfo.limit}`
      // 有分类
      // /article/cate/`${this.routeInfo.categoryId}`?page=`${newPage}`&limit=`${this.routeInfo.limit}`
      if(this.routeInfo.categoryId == -1) {
        this.$router.push({
          name: 'Blog',
          query
        })
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          query,
          params: {
            categoryId: this.routeInfo.categoryId
          }
        })
      }
    },
    // 触发事件总线监听事件
    // handleScroll() {
    //   this.$bus.$emit('mainScroll', this.$refs.container);
    // },
    // handleClick(scrollHeight) {
    //   this.$refs.container.scrollTop = scrollHeight;
    // }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
