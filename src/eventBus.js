// 手写事件总线

// 用来存放需要监听的事件
// var listeners = {};

// export default {
//     // 监听事件
//     $on(eventName, handler) {
//         if(!listeners[eventName]){
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },

//     // 取消监听
//     $delete(eventName, handler) {
//         if(!listeners[eventName]) {
//             return;
//         }
//         listeners[eventName].delete(handler);
//     },

//     // 触发监听事件
//     $emit(eventName, ...args) {
//         if(!listeners[eventName]) {
//             return;
//         }
//         for(const handler of listeners[eventName]) {
//             handler(...args);
//         }
//     }
// }


// vue组件实例中本身就有 $on $emit $delete这三个组件实例
import Vue from 'vue';
const app = new Vue({});

Vue.prototype.$bus = app;
export default app;
