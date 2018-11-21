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