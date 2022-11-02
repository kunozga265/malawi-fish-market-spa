<style lang="scss">
/*.presentation, .unit{
    width:100%;
    padding: 10px;

}*/

.floating-buttons{
    position: fixed;
    bottom: 0;
    right: 0;
}
.v-tab--active {
    background-color: rgb(62 128 203);
}
.filters{
    position: fixed;
    padding-top: 112px;
    z-index: 10;
    background-color: white;
    width: 100%;
}

.tabs-items{
    padding-top: 285px;
}

@media only screen and (min-width:600px) {
    .tabs-items{
        padding-top: 210px;
    }
}


</style>

<template>
    <div>
        <v-app-bar
            dark
            color="blue darken-3"
            fixed
            style="z-index:11"
        >
<!--            <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
<!--            <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

<!--            <v-toolbar-title class="d-none d-sm-flex">Malawi Fish Market</v-toolbar-title>-->
            <div class="app-logo">
                <v-avatar>
                    <img src="/images/logos/fish_app_logo.png" alt="">
                </v-avatar>
                <v-avatar>
                    <img src="/images/logos/luanar_logo.png" alt="">
                </v-avatar>
                <v-avatar>
                    <img src="/images/logos/african_alliance_logo.png" alt="">
                </v-avatar>
                <v-avatar>
                    <img src="/images/logos/michigan_logo.png" alt="">
                </v-avatar>

            </div>

            <v-spacer></v-spacer>

<!--            Smaller Screens-->
            <v-toolbar-items class="d-flex d-md-none">
                <v-btn icon text :to="{name:'dashboard'}">
                    <v-icon>mdi-store</v-icon>
                </v-btn>
                <v-btn icon text :to="{name:'catalog'}">
                    <v-icon>mdi-book-open</v-icon>
                </v-btn>
                <v-btn icon text :to="{name:'profile'}">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
<!--                <v-btn icon text @click="about=true">
                    <v-icon>mdi-comment-question</v-icon>
                </v-btn>-->
            </v-toolbar-items>

            <!--            Bigger Screens-->
            <v-toolbar-items class="d-none d-md-flex">
                <v-btn text :to="{name:'dashboard'}">
                    Market
                </v-btn>
                <v-btn text :to="{name:'catalog'}">
                    {{ isTrader?'Catalog':'Requests' }}
                </v-btn>
                <v-btn text :to="{name:'profile'}">
                    Profile
                </v-btn>
<!--                <v-btn text @click="about=true">
                    About
                </v-btn>-->
            </v-toolbar-items>
            <template v-slot:extension>
                <v-tabs
                    v-model="tab"
                    grow
                    centered
                >
                    <v-tabs-slider color="blue lighten-3"></v-tabs-slider>

                    <v-tab>
                        Selling ({{filteredProducts.length}})
                    </v-tab>
                    <v-tab>
                        Buying ({{filteredRequests.length}})
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-dialog
            v-model="about"
            width="500"
        >
            <v-card>
                <v-card-title class="text-h5 grey lighten-5">
                    About Project
                </v-card-title>

                <v-card-text>
                    Developed and supported by LUANAR & MSU teams led by Dr. Samson Katengeza, Prof Emmanuel Kaunda, Dr. Abigail Bennet, Edith Gondwe, Emma Rice, Patrick Chimseu, Gehazi Jenda and Kunozga Mlowoka with input from many other colleagues and stakeholders.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="about = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-navigation-drawer
            v-model="drawer"
            floating
            absolute
            temporary
            width="385px"
        >
            <div class="d-flex justify-space-between pa-5">
                <div class="headline font-weight-bold " >Digital Fish Marketing Tools</div>
                <v-icon >mdi-cog</v-icon>
            </div>
            <v-text-field
                filled
                rounded
                dense
                placeholder="Search Marketplace"
                class="mt-2"
            />
            <v-list
                dense
                rounded
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-store</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="subtitle-2">Browse All</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-bell</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="subtitle-2">Notifications</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-chart-bell-curve</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="subtitle-2">Chart</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-phone-classic</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="subtitle-2">Contact Us</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-star</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="subtitle-2">Register Premium Service</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <div class="text-center pa-3 caption">
                Developed and supported by LUANAR & MSU teams led by Prof Emmanuel Kaunda, Assistant Prof Abigail Bennet & Associate Prof Samson Katengeza
            </div>
        </v-navigation-drawer>

        <div class="filters">
            <v-container>
                <!--                <v-select
                                    v-model="filter"
                                    :items="filters"
                                    filled
                                    rounded
                                    dense
                                    placeholder="Select a filter"
                                    label="Filter By"
                                    class="mt-2"
                                />-->
                <v-row class="pt-5">
                    <v-col
                        style="padding:0 12px"
                        cols="6"
                        sm="3"
                    >
                        <v-select
                            v-model="speciesSelected"
                            :items="species"
                            filled
                            rounded
                            dense
                            placeholder="Select a species"
                            label="Select Species"
                            clearable
                        />
                    </v-col>
                    <v-col
                        style="padding:0 12px"
                        cols="6"
                        sm="3"
                    >
                        <v-select
                            v-model="district"
                            :items="districts"
                            filled
                            rounded
                            dense
                            placeholder="Select a location"
                            label="Select Location"
                            clearable
                        />
                    </v-col>
                    <v-col
                        style="padding:0 12px"
                        cols="6"
                        sm="3"
                    >
                        <v-select
                            v-model="presentation"
                            :items="presentations"
                            filled
                            rounded
                            dense
                            placeholder="Select a presentation"
                            label="Select Presentation"
                            clearable
                        />
                    </v-col>
                    <v-col
                        style="padding:0 12px"
                        cols="6"
                        sm="3"
                    >
                        <v-select
                            v-model="unit"
                            :items="units"
                            filled
                            rounded
                            dense
                            placeholder="Select a unit"
                            label="Select Unit"
                            clearable
                        />
                    </v-col>
                </v-row>





            </v-container>
        </div>
        <div class="tabs-items">
            <v-tabs-items v-model="tab" style="width: 100%">
                <v-tab-item>
                    <v-card
                        flat
                        class="pa-5 grey lighten-4"
                        tile
                        style="min-height: 100vh"
                    >

                        <v-row
                            v-if="filteredProducts.length > 0"
                        >
                            <product
                                v-for="(product,index) in paginatedProducts"
                                :key="index"
                                :product="product"
                                @chat="chatWithTrader"
                            />
                        </v-row>
                        <div
                            v-else
                            class="d-flex justify-center align-center"
                            style="height: 100%;"
                        >
                            No Results Found.
                        </div>

                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card
                        flat
                        class="pa-5 grey lighten-4"
                        tile
                        style="min-height: 100vh"

                    >
                        <v-row
                            v-if="filteredRequests.length > 0"
                        >
                            <request

                                v-for="(request,index) in paginatedRequests"
                                :key="index"
                                :request="request"
                                @chat="chatWithCustomer"
                            />
                        </v-row>
                        <div
                            v-else
                            class="d-flex justify-center align-center"
                            style="height: 100%;"
                        >
                            No Results Found.
                        </div>

                    </v-card>
                </v-tab-item>
            </v-tabs-items>




            <chat
                v-if="user.loggedIn"
                v-show="chat && displayChat"
                @close="closeChat"
                :receiver-id="receiverId"
                :is-customer="isCustomer"
            />

            <chat-lists
                v-if="user.loggedIn"
                v-show="chat && !displayChat"
                @view="viewChat"
            />
            <div class="floating-buttons">
                <v-btn
                    class="mx-2"
                    dark
                    color="blue darken-3"
                    :to="{name:'add-fish'}"
                    v-if="user.type==='Trader'"
                >
                    Add Fish
                </v-btn>
                <v-btn
                    class="mx-2"
                    dark
                    color="blue darken-3"
                    :to="{name:'add-to-cart'}"
                    v-else
                >
                    Add Request
                </v-btn>

                <v-btn
                    v-if="user.loggedIn"
                    class="mx-2"
                    fab
                    dark
                    small
                    color="blue darken-3"
                    @click="chat=!chat"
                >
                    <v-icon dark>
                        mdi-chat
                    </v-icon>
                </v-btn>
            </div>
        </div>
    </div>


</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import Product from "@/components/Product";

// import {db} from '@/Plugins/db'
import {database} from "@/app";
import {onValue, ref, query, orderByChild, orderByValue, orderByKey,limitToFirst} from "firebase/database";
import Chat from '@/components/Chat'
import ChatLists from "@/components/ChatLists";
import Request from "@/components/Request";
import product from "@/components/Product";

export default {
    name: "Home",

    components:{
        AppLayout,
        Product,
        Chat,
        ChatLists,
        Request
    },

    data() {
        return {
          /*  products: [],
            requests: [],*/
            value:1,
            chat:false,
            displayChat:false,
            receiverId:null,
            tab:0,
            drawer: false,
            about: false,
            filter:null,
            filters:[
                'Browse All',
                'Species',
                'Location',
                'Presentation',
                'Units',
            ],
            speciesSelected:null,
            species:['Batala','Bombe','Chambo','Kampango','Kapenta','Matemba','Mcheni','Mlamba','Mpasa','Ndunduma','Sanjika','Usipa','Utaka'],
            district:null,
            districts:[
                'Balaka',
                'Blantyre',
                'Chikwawa',
                'Chiradzulu',
                'Chitipa',
                'Dowa',
                'Karonga',
                'Kasungu',
                'Likoma',
                'Lilongwe',
                'Machinga',
                'Mangochi',
                'Mchinji',
                'Mulanje',
                'Mwanza',
                'Mzimba',
                'Neno',
                'Nkhata Bay',
                'Nkhotakota',
                'Nsanje',
                'Ntcheu',
                'Ntchisi',
                'Phalombe',
                'Rumphi',
                'Salima',
                'Thyolo',
                'Zomba',
            ],
            presentation:null,
            presentations:['Smoked','Sun Dried','Para Boiled','Fresh'],
            unit:null,
            units:['5L Bucket','Kg','Mulu','Fish','Dozen'],
            isCustomer:false,
            productsIndexLimit:20,
            requestsIndexLimit:20,
        }
    },

    created() {
        const productsRef = ref(database, 'Products');
        onValue(productsRef, (snapshot) => {
            this.$store.dispatch("setProducts",snapshot.val())
        });

        const requestsRef = query(ref(database, 'Requests'),orderByChild('negativeDateTimestamp'));
        onValue(requestsRef, (snapshot) => {
            this.$store.dispatch("setRequests",snapshot.val())
        });
    },
    mounted(){
      this.onScroll()
    },

    computed: {
        scroll(){
           /* if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight)
                return true
            else
                return false*/
            return{
                height:window.innerHeight,
                scrollY:window.scrollY,
                heightNScroll:window.innerHeight + window.scrollY,
                documentHeight:document.body.scrollHeight
            }
        },
        user(){
            return this.$store.getters.user
        },
      /*  products(){
            return this.$store.getters.products
        },*/
        requests(){
            return this.$store.getters.requests
        },
        isTrader(){
            return this.user.type==="Trader"
        },
        filteredProducts(){
            // let products=Object.values(this.products);
            let products=this.$store.getters.products;


            if(this.speciesSelected!=null){
                products = (products).filter((product) => {
                    return product.species.toLowerCase().includes(this.speciesSelected.toLowerCase())
                })
            }

            if(this.district!=null){
                products = (products).filter((product) => {
                    return product.district.toLowerCase().includes(this.district.toLowerCase())
                })
            }

            if(this.presentation!=null){
                products = (products).filter((product) => {
                    return product.presentation === this.presentation
                })
            }

            if(this.unit!=null){
                products = (products).filter((product) => {
                    return product.unit === this.unit
                })
            }

          /*  products = (products).filter((product) => {
                return product.status === "Available"
            })*/

            return products

            /*switch (this.filter){
                case 'Species':
                    return (products).filter((product) => {
                        return product.species.toLowerCase().includes(this.speciesSelected.toLowerCase())
                    })
                case 'Location':
                    return (products).filter((product) => {
                        return product.district.toLowerCase().includes(this.district.toLowerCase())
                    })
                case 'Presentation':
                    return (products).filter((product) => {
                        return product.presentation === this.presentation
                    })
                case 'Units':
                    return (products).filter((product) => {
                        return product.unit === this.unit
                    })
                default:
                    return products
            }*/
        },
        filteredProductsIndexLimit(){
            return (this.filteredProducts).length - 1
        },
        paginatedProducts(){
            let products=[]
            for(let x in this.filteredProducts){
                if (x <= this.productsIndexLimit)
                    products.push(this.filteredProducts[x])
            }
            return products
        },
        filteredRequests(){
            let requests=this.requests;

            if(this.speciesSelected!=null){
                requests = (requests).filter((request) => {
                    return request.species.toLowerCase().includes(this.speciesSelected.toLowerCase())
                })
            }

            if(this.district!=null){
                requests = (requests).filter((request) => {
                    return request.district.toLowerCase().includes(this.district.toLowerCase())
                })
            }

            if(this.presentation!=null){
                requests = (requests).filter((request) => {
                    return request.presentation === this.presentation
                })
            }

            if(this.unit!=null){
                requests = (requests).filter((request) => {
                    return request.unit === this.unit
                })
            }

            //get available
          /*  requests = (requests).filter((request) => {
                return request.status === "Available"
            })*/



            return requests

        },
        filteredRequestsIndexLimit(){
            return (this.filteredRequests).length - 1
        },
        paginatedRequests(){
            let requests=[]
            for(let x in this.filteredRequests){
                if (x <= this.requestsIndexLimit)
                    requests.push(this.filteredRequests[x])
            }
            return requests
        },
    },
    watch:{
        filteredProducts(){
            this.productsIndexLimit=20
        },
        filteredRequests(){
            this.requestsIndexLimit=20
        }
    },

    methods:{
        chatWithTrader(receiverId){
            this.receiverId=receiverId
            this.chat=true
            this.displayChat=true
            this.isCustomer=false
        },
        chatWithCustomer(receiverId){
            this.receiverId=receiverId
            this.chat=true
            this.displayChat=true
            this.isCustomer=true
        },
        viewChat(receiverId){
            this.receiverId=receiverId
            this.displayChat=true
        },
        closeChat(){

            this.displayChat=false
        },
        onScroll () {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

                if (bottomOfWindow) {
                    this.productsIndexLimit+=20
                    this.requestsIndexLimit+=20

                    if(this.productsIndexLimit > this.filteredProductsIndexLimit)
                        this.productsIndexLimit=this.filteredProductsIndexLimit

                    if(this.requestsIndexLimit > this.filteredRequestsIndexLimit)
                        this.requestsIndexLimit=this.filteredRequestsIndexLimit

                }
            }
        },
    }

}
</script>

<style scoped>

</style>
