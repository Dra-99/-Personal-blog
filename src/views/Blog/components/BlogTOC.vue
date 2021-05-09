<template>
  <div class="blog-toc.container">
      <h2>目录</h2>
      <RightList :list="tocWithSelect" @selectedEvent="handleSelected" />
  </div>
</template>

<script>
import RightList from './RightList';
import { debounce } from '@/utils';

export default {
    components: {
        RightList
    },
    data() {
        return {
            activeAnchor: ''
        }
    },
    props: {
        toc: {
            type: Array,
        }
    },
    created() {
        // 监听时间总线上的事件，触发事件
        this.setSelectDebounce = debounce(this.setSelect, 50);
        this.$bus.$on('mainScroll', this.setSelectDebounce);
    },
    destroyed() {
        this.$bus.$off('mainScroll', this.setSelectDebounce);
    },
    
    computed: {
        // 根据toc属性得到一个带有isSelect属性的新的toc数组
        tocWithSelect() {
            const getTOC = (toc = []) => {
                return toc.map(t => ({
                    ...t,
                    selected: t.anchor == this.activeAnchor,
                    children: getTOC(t.children)
                }))
            }
            return getTOC(this.toc);
        },
        doms() {
            const doms = [];
            
            const addToDoms = toc => {
                for (const t of toc) {
                    doms.push(document.getElementById(t.anchor));
                    if(t.children && t.children.length) {
                        addToDoms(t.children);
                    }
                }
            } 
            addToDoms(this.toc);
            return doms;
        }
    },
    methods: {
        handleSelected(item) {
            // console.log(item);
            location.hash = item.anchor;
        },
        // 为activeAnchor设置正确的值
        setSelect(scrollDom) {
            if(!scrollDom) {
                return;
            }
            // console.log(1);
            const range = 200;
            // 清空之前状态，因为要重新设置
            this.activeAnchor = "";
            for (const dom of this.doms) {
                if(!dom) {
                    continue;
                }
                const top = dom.getBoundingClientRect().top;
                if(top >= 0 && top <= range) {
                    this.activeAnchor = dom.id;
                }else if(top > range) {
                    return;
                }else {
                    this.activeAnchor = dom.id;
                }
            }
        }
    }
}
</script>

<style scoped lang="less">
.blog-toc-container{
  width: 100%;
//   box-sizing: border-box;
  overflow-y: scroll;
}
</style>