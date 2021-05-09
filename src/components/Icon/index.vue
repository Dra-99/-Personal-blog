<template>
    <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
    home: 'icon-zhuye',
    success: 'icon-icon-test',
    error: 'icon-Group-',
    close: 'icon-guanbi',
    warn: 'icon-jinggaowarning19',
    info: 'icon-xinxiinformation38',
    blog: 'icon-blog',
    code: 'icon-code',
    about: 'icon-set_about_hov',
    weixin: 'icon-weixin',
    mail: 'icon-emailmarketing_filled',
    github: 'icon-github',
    qq: 'icon-qq',
    arrowUp: 'icon-jiantoushang',
    arrowDown: 'icon-jiantouxia',
    empty: 'icon-empty',
    chat: 'icon-liuyan'
}
export default {
    props: {
        type: {
            type: String,
            required:true
        }
    },
    computed: {
        fontClass() {
            return classMap[this.type]
        }
    }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2456837_itxfrirjul.css";
.icon-container{
    color: inherit;
    font-size: inherit;
}
</style>