import Vue from 'vue';


// 传入组件和组件所需属性，我们可以得到根节点Dom
export default function getComponentRootDom(comp, props){
    const vm = new Vue({
      render: h => h(comp, {props})
    })
    vm.$mount();
    return vm.$el;
}