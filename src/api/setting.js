import request from './request';

// 获取全局设置
export async function getGlobalSetting() {
    return await request.get('/api/setting');
}