// Layout
import AppLayout from "@/Layouts/AppLayout";

// Pages
import Home from '@/Pages/Home.vue'
import TraderLogin from "@/Pages/TraderLogin";
import Welcome from "@/Pages/Welcome";
import Profile from "@/Pages/Profile";
import Catalog from "@/Pages/Catalog";
import New from '@/Pages/New'
import CustomerLogin from "@/Pages/CustomerLogin";
import HomeCustomer from "@/Pages/Customer/HomeCustomer";
import AddToCart from "@/Pages/Customer/AddToCart";
import AppLayoutCustomer from "@/Layouts/AppLayoutCustomer";
import CatalogCustomer from "@/Pages/Customer/CatalogCustomer";
import ProfileCustomer from "@/Pages/Customer/ProfileCustomer";
import PersonalInformation from "@/Pages/PersonalInformation";

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AppLayout,

            children: [
                {

                    path: '/welcome',
                    name: 'welcome',
                    component: Welcome,
                    meta:{
                        guest:true,
                    },
                },
                {
                    path: '/i-want-to-sell',
                    name: 'i-want-to-sell',
                    component: TraderLogin,
                    meta:{
                        guest:true,
                    },
                },
                {
                    path: '/i-want-to-buy',
                    name: 'i-want-to-buy',
                    component: CustomerLogin,
                    meta:{
                        guest:true,
                    },
                },
                {
                    path: '/personalInformation',
                    name: 'personal-information',
                    component: PersonalInformation,
                    meta:{
                        auth:true,
                    },
                    props:true
                },
                {
                    path: '/',
                    name: 'dashboard',
                    component: Home,
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: Profile,
                    meta:{
                        auth:true,
                    },
                    props:true
                },
                {
                    path: '/catalog',
                    name: 'catalog',
                    component: Catalog,
                    meta:{
                        auth:true,
                    },
                    props:true
                },
                {
                    path: '/add-fish',
                    name: 'add-fish',
                    meta:{
                        auth:true,
                    },
                    component: New,
                },
                {
                    path: '/add-to-cart',
                    name: 'add-to-cart',
                    component: AddToCart,
                    meta:{
                        auth:true,
                    },
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
