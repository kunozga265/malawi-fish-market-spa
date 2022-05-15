// Layout
import AppLayout from "@/Layouts/AppLayout";

// Pages
import Home from '@/Pages/Home.vue'
import Login from "@/Pages/Login"
import Welcome from "@/Pages/Welcome";
import Profile from "@/Pages/Profile";
import Catalog from "@/Pages/Catalog";
import New from '@/Pages/New'

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome,
            meta:{
                guest:true,
                admin:true
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta:{
                guest:true,
                admin:true
            },
        },
        {
            path: '/',
            component: AppLayout,
            meta: {
                auth: true,
                admin: true
            },
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Home,
                },
                {
                    path: '/profile/:uid',
                    name: 'profile',
                    component: Profile,
                    props:true
                },
                {
                    path: '/catalog/:uid',
                    name: 'catalog',
                    component: Catalog,
                    props:true
                },
                {
                    path: '/add-fish',
                    name: 'add-fish',
                    component: New,

                },
            ]
        }
    ]
}
