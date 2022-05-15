require('./bootstrap');

// Import modules...
import Vue from 'vue';
import vuetify from '@/Plugins/vuetify'
import { rtdbPlugin } from 'vuefire'
// import App from "@/Layouts/AppLayout";
import VueRouter from 'vue-router'
import routes from '@/Plugins/routes'

import firebase from "firebase/compat/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import 'firebase/compat/database'

import store from "@/Plugins/store";

/*
* Plugins
*/
Vue.use(VueRouter) // Vue Router
// Vue.use(rtdbPlugin) // Vuefire


const firebaseConfig={
    apiKey:'AIzaSyDCo_VeA3dm4ASOcO6Cl254_VxtxPv4rm4',
    // authDomain: "your-firebase-auth-domain",
    projectId: "fish-market-app-52bb0",
    // storageBucket: "your-firebase-storage-bucket",
    messagingSenderId: "42879463880",
    // appId: "your-firebase-app-id",
    databaseURL: 'https://fish-market-app-52bb0-default-rtdb.firebaseio.com/'
}

const _app=firebase.initializeApp(firebaseConfig)

export const auth=getAuth(_app)

export const database=firebase.database()


//global variable
Vue.prototype.$database = database

onAuthStateChanged(auth,(user) => {
    store.dispatch("fetchUser", user);
});


const app = new Vue({
    el: '#app',
    // components: { App },
    router: new VueRouter(routes),
    vuetify,
    store,
})

/*new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
    vuetify,
    rou
}).$mount(app);*/
