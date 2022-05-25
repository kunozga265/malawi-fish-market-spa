// Layout
import AppLayout from "@/Layouts/AppLayout";

// Pages
import Home from '@/Pages/Home.vue'
import Login from "@/Pages/Login"
import Welcome from "@/Pages/Welcome";
import Profile from "@/Pages/Profile";
import Catalog from "@/Pages/Catalog";
import New from '@/Pages/New'
import LoginCustomer from "@/Pages/Customer/LoginCustomer";
import HomeCustomer from "@/Pages/Customer/HomeCustomer";
import AddToCart from "@/Pages/Customer/AddToCart";
import AppLayoutCustomer from "@/Layouts/AppLayoutCustomer";
import CatalogCustomer from "@/Pages/Customer/CatalogCustomer";
import ProfileCustomer from "@/Pages/Customer/ProfileCustomer";

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AppLayout,
            meta: {
                auth: true,
                admin: true
            },

            children: [
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
                    path: '/trader/login',
                    name: 'login',
                    component: Login,
                    meta:{
                        guest:true,
                        admin:true
                    },
                },
                {
                    path: '/customer/login',
                    name: 'login-customer',
                    component: LoginCustomer,
                    meta:{
                        guest:true,
                        admin:true
                    },
                },
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Home,
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: Profile,
                    props:true
                },
                {
                    path: '/catalog',
                    name: 'catalog',
                    component: Catalog,
                    props:true
                },
                {
                    path: '/add-fish',
                    name: 'add-fish',
                    component: New,
                },
                {
                    path: '/add-to-cart',
                    name: 'add-to-cart',
                    component: AddToCart,
                },
            ]}


      /*  {
            path: '/',
            component: AppLayout,
            meta: {
                auth: true,
                admin: true
            },

            children: [


               /!* //Customer Routes

                {
                    path: '/customer/dashboard',
                    name: 'customer-dashboard',
                    component: HomeCustomer,
                },

                {
                    path: '/customer/new',
                    name: 'customer-new',
                    component: NewCart,
                },*!/
            ]
        },
        {
            path: 'customer',
            component: AppLayoutCustomer,
            meta: {
                auth: true,
                admin: true
            },
            children: [

                //Customer Routes

                {
                    path: '/dashboard',
                    name: 'customer-dashboard',
                    component: HomeCustomer,
                },



                {
                    path: '/profile/:uid',
                    name: 'customer-profile',
                    component: ProfileCustomer,
                    props:true
                },
                {
                    path: '/catalog/:uid',
                    name: 'customer-catalog',
                    component: CatalogCustomer,
                    props:true
                },
            ]
        }*/
    ]
}
