import { createStore } from "vuex";

import rootGetters from './getters';
import rootActions from './actions';
import rootMutations from './mutations'

const store = createStore({
    state(){
        return{
            // friends: [],
            friends: ['maaike'],
            drinks: [],
            input: 'NEW ADD',
        };
    },
    getters: rootGetters,
    actions: rootActions,
    mutations: rootMutations
});

export default store;