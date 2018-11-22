<template>
    <div>
        当 store root 
        和 modules 中的 state 有相同的时候，并且 mutations 下有相同的方法，并且 getters 下有相同的方法，并且不使用 namespaced 可能会出现的问题：
        <ul>
            <li>
                <i class="no">1.</i> [vuex] duplicate getter key: getCount，请打开控制台查看
            </li>
            <li>
                <i class="no">2.</i> 为什么 sate 和 mutations 不会出现 警告：（1） state 默认是有命名空间。（2）mutations 的每个方法都是存放在该方法的 name 下面的数组中，请打开控制台查看，或者查看下面的图👇
            </li>
            <li>
                <i class="no">3.</i> 调用 $store.commit('increment') 这个方法，没有使用 namespaced 的 module 提交相同的 state 的话会同时改变，请点击 👉 <button @click="$store.commit('increment')">inscrement</button>
                <div>
                        root: {{$store.state.count}}
                        test: {{$store.state.test.count}}
                </div>
            </li>
        </ul>
        <img src="~/assets/image/vuex/no_namespaced_state.png" alt="">
        <div>
<pre>
    store/index.js

    import Vue from 'vue'
    import Vuex from 'vuex'
    import test from './modules/test'

    Vue.use(Vuex)

    const createStore = () => new Vuex.Store({
        modules: {
            test
        },
        state: {
            count: 0
        },
        getters: {
            getCount:(state) => state.count 
        },
        mutations: {
            increment (state) {
                state.count++
            },
            noChange() {

            }
        }
    })

    export default createStore
</pre>

<pre>
    store/modules/test.js

    export default {
        state: {
            count: 0
        },
        getters: {
            getCount:(state) => state.count 
        },
        mutations: {
            increment (state) {
                state.count++
            }
        }   
    }
</pre>

<pre>
    html:
    
    &lt;button @click="$store.commit('increment')"&gt;inscrement&lt;/button&gt;
    root: { { $store.state.count } }
    test: { { $store.state.test.count } }
</pre>

    </div>
  
    </div>
</template>

<script>
export default {
    name: 'VuexNoNamespaced',
    mounted() {
        console.log('%c store %c 不使用 namespaced 可能会出现的问题', 'background: #5C6BC0; color: #fff;', 'background: #fff; color: #5C6BC0;')
        console.log(this.$store)
        console.log(this.$store.commit('increment'))
        console.log(this.$store)
    }
}
</script>

<style lang="scss" scoped>
$mainColorLigt: #48a999;
$mainColor: #004c40;
$blockBgColor: #c67100;
$hrColor: #ffd54f;
$inlineColor: #6ec6ff;
$textColoe: #fff;
$marginNormal: 15px;
$marginSmall: 8px;
$height: 38px;
pre {
    padding: $marginSmall;
    border: 2px dashed $inlineColor;
}
.no {
    color: $mainColorLigt;
    font-size: 40px;
    font-weight: 500;
    font-style: normal;
}
</style>
