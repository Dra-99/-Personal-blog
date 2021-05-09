<template>
    <Layout>
        <div ref="mainContainer" v-loading="isLoading" class="main-container">
            <blog-detail :blog="data" v-if="data"></blog-detail>
            <blog-comment v-if="!isLoading"></blog-comment>
        </div>
        <template #right>
            <div v-loading="isLoading" class="blogToc">
                <BlogTOC :toc="data.toc" v-if="data"/>
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout from '@/components/Layout';
import BlogDetail from './components/BlogDetail';
import BlogTOC from './components/BlogTOC';
import fetchData from '@/mixins/fetchData';
import { getBlog } from '@/api/blog'
import BlogComment from './components/BlogComment';
import mainScroll from '@/mixins/mainScroll';
import { setBlogTitle } from '@/utils';

export default {
    mixins: [fetchData(null), mainScroll('mainContainer')],
    components: {
        Layout,
        BlogDetail,
        BlogTOC,
        BlogComment
    },
    updated() {
        const hash = location.hash;
        location.hash = '';
        setTimeout(() => {
            location.hash = hash;
        }, 50);
    },
    methods: {
        async fetchData() {
            // 传入的是文章对应的id
            let resp =  await getBlog(this.$route.params.id)
            // resp = null;
            if(!resp) {
                this.$router.push('/404')
            }
            if(resp.title) {
                setBlogTitle.setRouteTitle(resp.title);
            }
            return resp;
        },
    },
}
</script>

<style scoped lang="less">
.main-container{
    height: 100%;
    position: relative;
    overflow-y: scroll;
    padding: 20px;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
.blogToc{
    width: 250px;
    padding: 20px;
    position: relative;
    height: 100%;
    font-weight: bold;
}
</style>