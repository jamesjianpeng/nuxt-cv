<template>
    <div>
        <GoBack />
        <VuexNoNamespaced />
    </div>
</template>

<script>
import VuexNoNamespaced from '~/components/plugins_vuex/no_namespaced.vue'
import GoBack from '~/components/common/goBack.vue'

export default {
    name: 'VuexNoNamespacedIndex',
    components: {
        VuexNoNamespaced,
        GoBack
    }
}
</script>

