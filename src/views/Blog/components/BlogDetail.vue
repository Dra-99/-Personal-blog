<template>
  <div class="blog-detail-container">
      <h1>{{blog.title}}</h1>
      <div class="info">
          <span>日期:{{formatDate(blog.createDate)}}</span>
          <span>浏览:{{blog.scanNumber}}</span>
          <a href="#form-data-container">评论:{{blog.commentNumber}}</a>
          <router-link :to="{
                name: 'CategoryBlog',
                params: {
                    categoryId: blog.category.id
                } 
          }">
            {{blog.category.name}}
          </router-link>
      </div>
      <!-- 因为我们从服务器得到的数据是有html格式的，如果直接使用{{}}来进行显示，会将html标签进行编译 -->
      <!-- 会显示不出原先用html标签规定出来的样式，因此这里我们使用v-html -->
      <div class="markdown-body" v-html="blog.htmlContent">

      </div>
  </div>
</template>

<script>
import formatDate from '@/utils/formatDate';
import '@/styles/markdown.css';
// 代码高亮
import "highlight.js/styles/github.css";

export default {
    props: {
        blog: {
            type: Object,
            require: true
        }
    },
    methods: {
        formatDate
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';

// .blog-detail-container{
//     position: relative;
// }
.info {
    span, a{
        font-size: 13px;
        margin-right: 15px;
        color: @gray;
    }
}
.markdown-body{
    margin: 20px 0;
}
</style>