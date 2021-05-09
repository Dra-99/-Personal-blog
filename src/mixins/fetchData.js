export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue
            }
        },
        // 获取banner列表
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false
        }
    }
}