<template>
  <ul class="right-list-container">
      <li v-for="(item, index) in list" :key="index">
          <span @click="handleSelected(item)" :class="{selected: item.selected}">{{item.name}}</span>
          <span class="aside" :class="{selected: item.selected}" v-if="item.aside">({{item.aside}})</span>
          <RightList :list="item.children" @selectedEvent="handleSelected"/>
      </li>
  </ul>
</template>

<script>
export default {
    // 组件递归
    // 给他个名字
    name: 'RightList',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        handleSelected(item) {
            if(!item.selected) {
                this.$emit('selectedEvent', item);
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.right-list-container{
    padding: 0;
    list-style: none;
    .right-list-container{
        margin-left: 25px;
    }
    li{
        min-height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: @dark;
        cursor: pointer;
        .selected{
            color: @warn;
            font-weight: 600;
        }
    }
    .aside{
        margin-left: 5px;
        font-size: 12px;
        color: @gray;
        .selected{
            color: @warn;
        }
    }
}
</style>