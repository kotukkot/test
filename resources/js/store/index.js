import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            values: []
        }
    },
    mutations: {
        addValue(state, value) {
            state.values.push(value);
        },
        clearValues(state) {
            state.values = [];
        }
    },
    getters: {
        getList(state) {
            return state.values;
        },
        getLength(state) {
            return state.values.length;
        }
    }
})

export default store;
