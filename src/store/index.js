import { createStore } from "vuex";
export default createStore({
    state: {
        us: "我来自Vuex",
        usNum: 10
    },
    getters: {
        uss: (state) => {
            return state.usNum+20
        }
    },
    mutations: {
        change(state) {
            state.us = "我被改变了"
            state.usNum++
        }
    },
    actions: {
        change (context) {
            context.commit('change')
          }
    },
    modules: {

    }
})