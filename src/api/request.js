import axios from 'axios';
import { showMessage } from '../utils/index';

const ins = axios.create();

// 拦截器，响应拦截，在数据返回之前会先执行拦截器

ins.interceptors.response.use(function(resp) {
    // console.log('拦截器');
    // return resp.data;
    if(resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: 'error',
            duration: 2000
        })
        return null;
    }
    return resp.data.data;
})

export default ins;