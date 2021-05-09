import getComponentRootDom from './getComponentRootDom';
import Icon from '@/components/Icon';
import styles from './showMessageStyle.module.less';

/**
 * 
 * @param {String} content 消息内容
 * @param {string} type 属性值，传入 success、info、warn、 error
 * @param {*} container 容器    将生成的dom放置在该容器中
 * @param {*} duration 消息提示消失的时间 
 */
export default function showMessage(options = {}) {
    const content = options.content || "";
    const type = options.type || 'info';
    const container = options.container || document.body;
    const duration = options.duration || 2000;
    // 创建消息元素
    const div = document.createElement("div");

    // 得到图表组件根元素
    const iconDom = getComponentRootDom(Icon, { type });

    // console.log(iconDom);

    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`

    const typeClassName = styles[`message-${type}`];

    div.className = `${styles.message} ${typeClassName}`;

    if(options.container) {
        if(getComputedStyle(container).position == 'static'){
            container.style.position = 'relative'
        }
    }
    
    container.appendChild(div);
    // console.log(div);

    // 浏览器强行渲染
    div.clientHeight; //reflow

    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        // 销毁div
        div.addEventListener('transitionend', function() {
            div.remove()
            // 判断有无回调
            options.callBack&&options.callBack();
        }, {once: true});
    }, duration)
}

