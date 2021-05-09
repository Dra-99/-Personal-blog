import 'nprogress/nprogress.css';
import { start, done, configure } from 'nprogress';

configure({
    trickleSpeed: 5,
})

// 命名路由，解除路径和导航之间的耦合
function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

function loadComponent(componentFun) {
    return async () => {
        // console.log('组件开始加载');
        start();
        if(process.env.NODE_ENV === "development") {
            await delay(500);
        }
        const comp = await componentFun();
        // console.log("组件加载完成");
        done();
        return comp;
    }
}


export default [
    {
        name: 'Home',
        path: '/',
        component: loadComponent(() => import(/**webpackChunkName: "Home" */"@/views/Home")),
        meta: {
            title: '首页'
        }
    },
    {
        name: 'Blog',
        path: '/article',
        component: loadComponent(() => import(/**webpackChunkName: "Blog" */"@/views/Blog")),
        meta: {
            title: '文章'
        }
    },
    {
        name: 'CategoryBlog',
        path: '/article/cate/:categoryId',
        component: loadComponent(() => import(/**webpackChunkName: "Blog" */"@/views/Blog")),
        meta: {
            title: '文章'
        }
    },
    {
        name: 'BlogDetail',
        path: '/article/:id',
        component: loadComponent(() => import(/**webpackChunkName: "BlogDetail" */"@/views/Blog/Detail")),
        meta: {
            title: '文章详情'
        }
    },
    {
        name: 'About',
        path: '/about',
        component: loadComponent(() => import(/**webpackChunkName: "About" */"@/views/About")),
        meta: {
            title: '关于我'
        }
    },
    {
        name: 'Message',
        path: '/message',
        component: loadComponent(() => import(/**webpackChunkName: "Message" */"@/views/Message")),
        meta: {
            title: '留言板'
        }
    },
    {
        name: 'Project',
        path: '/project',
        component: loadComponent(() => import(/**webpackChunkName: "Project" */"@/views/Project")),
        meta: {
            title: '项目&效果'
        }
    },
    {
        name: 'NotFound',
        path: '*',
        component: loadComponent(() => import(/**webpackChunkName: "NotFound" */"@/views/NotFound")),
        meta: {
            title: "未发现页面"
        }
    }
]