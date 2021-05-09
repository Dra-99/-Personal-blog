// 导出的是自定义属性的指令配置
// 便是通过语法来控制加载图片的显示与否

// 自定义指令配置提供了几个钩子函数供我们使用
// 如果两个钩子函数功能相同，我们可以将其简化为一个函数
import svgUrl from '@/assets/loading.svg';
import loading from './loadingCenter.module.less';

function isImg(el) {
    return el.querySelector("img[data-role=loading]")
}

// 创建img元素
function createImg() {
    const img = document.createElement('img');
    img.dataset.role = "loading";
    img.src = svgUrl; 
    img.className = loading.center;
    return img;
}



export default function(el, binding) {
    // 根据binding.value的值来判断是否添加或者删除img元素
    const loadingImg = isImg(el);

    if(binding.value) {
        // console.log(binding.value);
        // console.log(isImg(el));
        // 判断是否存在img元素
        if(!loadingImg) {
            const img = createImg();
            el.appendChild(img);
        }
    }else {
        // console.log(binding.value)
        if(loadingImg) {
            loadingImg.remove();
        }
    }   
}