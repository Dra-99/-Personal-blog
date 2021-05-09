<template>
  <div class="blog-comment-container">
    <show-message
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    ></show-message>
  </div>
</template>

<script>
import ShowMessage from "@/components/showMessage";
import fetchData from "@/mixins/fetchData";
import { postComment, getComments } from "@/api/blog";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    ShowMessage,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    isHasMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore() {
      if(!this.isHasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(formValue, callback) {
      const res = await postComment({
        blogId: this.$route.params.id,
        ...formValue,
      })
      // console.log(res);
      this.data.rows.unshift(res);
      this.data.total++;
      callback('评论成功');
    },
    handleScroll(dom) {
      // 表示现在正在加载
      if(this.isLoading || !dom) {
        return;
      }
      const range = 100;
      const dec = Math.abs(dom.scrollHeight - (dom.scrollTop + dom.clientHeight));
      if(dec <= range) {
        this.fetchMore();
      }
    }
  },
  mounted() {
    this.$bus.$on('mainScroll', this.handleScroll);
    // window.fetchMore = this.fetchMore;
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>