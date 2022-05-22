import Vue from "vue";
import Vuex from "vuex";
import VuexPersist  from "vuex-persist"

Vue.use(Vuex);

//Sets up Vuex Persist
const vuexLocalStorage=new VuexPersist({
    key:        'vuex', //The key to store the state on in the storage provider.
    storage:    window.localStorage, //or window.sessionStorage or localForage

    //Function that passes the state and returns the state with only the objects you want to store
    // reducer:state=>state,
    reducer:state=>({
        user:state.user,
    }),
    //Function that passes a mutation and lets you decide if it should update the state in localStorage
    filter:   mutation=> (true)
});

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        personalInformation:{

        }
    },
    getters: {
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email,
                    uid: user.uid,
                });
            } else {
                commit("SET_USER", null);
            }
        }
    },
    plugins:[vuexLocalStorage.plugin]

});
