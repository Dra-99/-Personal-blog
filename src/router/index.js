import Vue from 'vue';
import vueRouter from 'vue-router';
import routes from './routes'
import { setBlogTitle } from '../utils';
if(!window.vueRouter) {
    Vue.use(vueRouter);
}

const router = new vueRouter({
    routes,
    mode: 'history'
})

router.afterEach((to, from) => {
    // console.log(to.meta.title);
    // document.title = to.meta.title;
    if(to.meta.title) {
        setBlogTitle.setRouteTitle(to.meta.title);
    }
}) 

export default router;