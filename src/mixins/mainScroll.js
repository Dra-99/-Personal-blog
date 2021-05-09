export default function(refValue) {
    return {
        mounted() {
            this.$bus.$on('setMainScroll', this.handleClickTop);
            this.$refs[refValue].addEventListener('scroll', this.handleMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit('mainScroll');
            this.$bus.$off('setMainScroll', this.handleClickTop);
            this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll);
        },
        methods: {
            handleMainScroll() {
                this.$bus.$emit('mainScroll', this.$refs[refValue]);
            },
            handleClickTop(scrollHeight) {
                this.$refs[refValue].scrollTop = scrollHeight;
            }
        }
    }
}