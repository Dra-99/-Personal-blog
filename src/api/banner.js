// 初始化axios实例，我们可以通过返回的实例对象来进行请求拦截
// 然后我们可以在拦截中执行我们的某些操作
import ins from './request';

export async function getBanner() {
    return await ins.get('/api/banner');
}
