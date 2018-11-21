<template>
    <div>
        axios
    </div>
</template>

<script>
export default {
    name: 'PluginsAxios',
    async mounted() {
        console.log()
        const res = await this.$axios.get('https://cvapi.pengjiandry.com/hello')
        console.log(res)
    }
}
</script>
