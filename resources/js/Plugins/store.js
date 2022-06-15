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
        products:state.products,
        requests:state.requests,
    }),
    //Function that passes a mutation and lets you decide if it should update the state in localStorage
    filter:   mutation=> (true)
});

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null,
            info:null,
            type:null,
        },
        products:[],
        requests:[],
    },
    getters: {
        loggedIn(state){
            return state.user.loggedIn
        },
        user(state){
            return state.user
        },
        products(state){
            return state.products
        },
        requests(state){
            return state.requests
        },
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER_INFO(state, value) {
            state.user.info = value;
        },
        SET_USER_TYPE(state, value) {
            state.user.type = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        REMOVE_USER_DETAILS(state) {
            state.user = {
                loggedIn: false,
                data: null,
                info:null,
                type:null
            };
        },
        SET_PRODUCTS(state, data) {
            state.products = data;
        },
        SET_REQUESTS(state, data) {
            state.requests = data;
        },
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    email: user.email,
                    uid: user.uid,
                });
            } else {
                commit("SET_USER", null);
            }
        },
        setUserInfo({ commit }, info) {
            if (info) {
                commit("SET_USER_INFO", info);
            }
        },
        setUserType({ commit }, type) {
            if (type) {
                commit("SET_USER_TYPE", type);
            }
        },
        setProducts({ commit }, data) {
            if (data) {
                commit("SET_PRODUCTS", data);
            }
        },
        setRequests({ commit }, data) {
            if (data) {
                commit("SET_REQUESTS", data);
            }
        },
        logout({ commit }) {
            commit("REMOVE_USER_DETAILS");
        }
    },
    plugins:[vuexLocalStorage.plugin]

});
