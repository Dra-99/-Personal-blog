<template>
  <div v-loading="isLoading" class="blog-category-container">
    <h2 class="title">文章分类</h2>
    <RightList class="type" :list="list" @selectedEvent="handleSelected" />
  </div>
</template>

<script>
import RightList from './RightList';
import fetchData from '@/mixins/fetchData';
import { getBlogTypes } from '@/api/blog';

export default {
  mixins: [fetchData([])],
  components: {
    RightList
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelected(item) {
      // console.log(item);
      const query = {
        page: 1,
        limit: this.limit
      }
      if(item.id == -1) {
        this.$router.push({
          name: 'Blog',
          query
        })
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          query,
          params: {
            categoryId: item.id
          }
        })
      }
    }
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [
        {name: '全部', id: -1, articleCount: totalArticleCount},
        ...this.data
      ];
      return result.map((it) => ({
        ...it,
        selected: it.id === this.categoryId,
        aside: `${it.articleCount}篇`
      }))
    }
  }
}
</script>

<style scoped lang="less">
.blog-category-container{
  width: 300px;
  box-sizing: border-box;
  padding: 30px;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  .title{
    font-weight: bold;
    font-size: 1em;
  }
}
</style>