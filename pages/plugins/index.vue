<template>
    <div>
        <div class="wrap">
            <ul class="sub-item-content">
                <li>
                    <nuxt-link to="/plugins/axios" class="nav-text">axios test</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/plugins/vuex" class="nav-text">vuex test</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/plugins/lifeCycle" class="nav-text">lifeCycle</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PluginsIndex',
    layout: 'home',
}
</script>

