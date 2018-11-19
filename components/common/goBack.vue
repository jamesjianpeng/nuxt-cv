<template>
    <button class="bnt pointer" @click="goback">返回</button>
</template>

<script>
export default {
    name: 'GoBack',
    methods: {
        goback() {
            this.$router.push({ path: '/home' })
        }
    }
}
</script>

<style lang="scss">
$mainColorLigt: #48a999;
$mainColor: #004c40;

.bnt {
    border: none;
    background: #fff;
    color: $mainColorLigt;
    font-size: 14px;
    outline:none;
    &:hover {
        color: $mainColor;
    }
}
</style>


