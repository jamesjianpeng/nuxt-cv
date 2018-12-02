<template>
    <div>
        <div class="wrap">
            axios
        </div>
    </div>
</template>

<script>
export default {
    name: 'PluginsAxios',
    layout: 'home',
    async mounted() {
        console.log()
        const res = await this.$axios.get('https://cv.api.pengjiandry.com.test/')
        console.log(res)
    }
}
</script>
