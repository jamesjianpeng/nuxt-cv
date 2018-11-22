<template>
    <div>
        <div>
            <GoBack />
        </div>
        <ul>
            <li>
                <nuxt-link to="/plugins/vuex/noNamespaced">no namespaced (不使用 namespaced 可能会出现的问题)</nuxt-link>
            </li>
        </ul>
        还在建设中请敬期待～
    </div>
</template>

<script>
import GoBack from '~/components/common/goBack.vue'

export default {
    name: 'VuexIndex',
    mounted() {
        // console.log('%c 全局路由 %c - beforeEach', 'background: #5C6BC0; color: #fff;', 'background: #fff; color: #5C6BC0;')
        console.log(this.$store)
        console.log(this.$store.commit('increment'))
        console.log(this.$store)
    },
    components: {
        GoBack
    }
}
</script>
