import eventBus from '../eventBus';
import debounce from '@/utils/debounce';
import defaultImg from '@/assets/lazyLoading/default.gif';


// 设置图片是否加载
function setImg(img) {
    // 先把加载图片进行设置
    img.dom.src = defaultImg;

    // console.log(1, img.src);
    // imgs = imgs.filter(i => i != img);
    const rect = img.dom.getBoundingClientRect();
    // console.log(rect);
    // 获得视口的高度
    const clientHeight = document.documentElement.clientHeight;
    // 判断图片是否在视口范围之内
    if(rect.top > -rect.height || rect.top < clientHeight) {
        // 在视口范围内
        let replaceImg = new Image();
        replaceImg.onload = function() {
            img.dom.src = img.src;
        }
        replaceImg.src = img.src;
        // 下面这样写也可以
        // img.dom.src = img.src;
        imgs = imgs.filter(i => i != img);
    }
}

function setImgs() {
    for (const img of imgs) {
        setImg(img);
    }
}

// 定义一个数组用来存放图片元素的集合
let imgs = [];

function handleScroll() {
    // console.log(111);
    // console.log(imgs);
    setImgs();
}

// 监听事件总线上滚动条变化
eventBus.$on('mainScroll', debounce(handleScroll, 50));

export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value
        }
        imgs.push(img);
        // 立即处理
        setImg(img);
    },
    // 元素与指令解绑时调用
    unbind(el) {
        imgs = imgs.filter(img => img.dom != el);
    }
}