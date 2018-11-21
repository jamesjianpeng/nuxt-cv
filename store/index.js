import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'

Vue.use(Vuex)

const createStore = () => new Vuex.Store({
    modules: {
        test
    },
    /**
     * @description 测试不使用命名空间（namespaced）的 modules，state 相同，mutations 有相同的方法
     * 
     */
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

