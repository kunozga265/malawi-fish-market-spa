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
</style>

<template>
    <div>
        <v-app-bar
            dark
            color="blue darken-3"
            fixed
        >
<!--            <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title class="d-none d-sm-flex">Malawi Fish Market</v-toolbar-title>
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
                <v-btn icon text @click="about=true">
                    <v-icon>mdi-comment-question</v-icon>
                </v-btn>
            </v-toolbar-items>

            <!--            Bigger Screens-->
            <v-toolbar-items class="d-none d-md-flex">
                <v-btn text :to="{name:'dashboard'}">
                    Market
                </v-btn>
                <v-btn text :to="{name:'catalog'}">
                    Catalog
                </v-btn>
                <v-btn text :to="{name:'profile'}">
                    Profile
                </v-btn>
                <v-btn icon text @click="about=true">
                    <v-icon>mdi-comment-question</v-icon>
                </v-btn>
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
                    Developed and supported by LUANAR & MSU teams led by Prof Emmanuel Kaunda, Assistant Prof Abigail Bennet & Associate Prof Samson Katengeza
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

        <v-layout >
            <v-container>
                <v-select
                    v-model="filter"
                    :items="filters"
                    filled
                    rounded
                    dense
                    placeholder="Select a filter"
                    label="Filter By"
                    class="mt-2"
                />
                <v-select
                    v-if="filter==='Species'"
                    v-model="speciesSelected"
                    :items="species"
                    filled
                    rounded
                    dense
                    placeholder="Select a species"
                    label="Select Species"
                />
                <v-select
                    v-else-if="filter==='Location'"
                    v-model="district"
                    :items="districts"
                    filled
                    rounded
                    dense
                    placeholder="Select a location"
                    label="Select Location"
                />
                <v-select
                    v-else-if="filter==='Location'"
                    v-model="district"
                    :items="districts"
                    filled
                    rounded
                    dense
                    placeholder="Select a location"
                    label="Select Location"
                />
                <v-select
                    v-else-if="filter==='Presentation'"
                    v-model="presentation"
                    :items="presentations"
                    filled
                    rounded
                    dense
                    placeholder="Select a presentation"
                    label="Select Presentation"
                />
                <v-select
                    v-else-if="filter==='Units'"
                    v-model="unit"
                    :items="units"
                    filled
                    rounded
                    dense
                    placeholder="Select a presentation"
                    label="Select Presentation"
                />
            </v-container>
        </v-layout>
        <div>
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
                                v-for="(product,index) in filteredProducts"
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
                        <request
                            v-if="filteredRequests.length > 0"
                            v-for="(request,index) in filteredRequests"
                            :key="index"
                            :request="request"
                            @chat="chatWithTrader"
                        />
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
                v-show="chat && displayChat"
                @close="closeChat"
                :receiver-id="receiverId"
            />

            <chat-lists
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
                    Add Cart
                </v-btn>

                <v-btn
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
import {onValue, ref} from "firebase/database";
import Chat from '@/components/Chat'
import ChatLists from "@/components/ChatLists";
import Request from "@/components/Request";

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
            products: [],
            requests: [],
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
            speciesSelected:'Batala',
            species:['Batala','Chambo','Matemba','Mcheni','Mlamba','Ndunduma','Usipa','Utaka'],
            district:'Balaka',
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
            presentation:'Smoked',
            presentations:['Smoked','Sun Dried','Para Boiled','Fresh'],
            unit:'Per 5L Bucket',
            units:['5L Bucket','Kg','Mulu','Fish'],
        }
    },

    created() {
        const productsRef = ref(database, 'Products');
        onValue(productsRef, (snapshot) => {
            this.products=snapshot.val()
        });

        const requestsRef = ref(database, 'Requests');
        onValue(requestsRef, (snapshot) => {
            this.requests=snapshot.val()
        });
    },

    computed: {
        user(){
            return this.$store.getters.user
        },
        filteredProducts(){
            let products=Object.values(this.products);
            switch (this.filter){
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
            }

        },
        filteredRequests(){
            let requests=Object.values(this.requests);
            switch (this.filter){
                case 'Species':
                    return (requests).filter((request) => {
                        return request.species.toLowerCase().includes(this.speciesSelected.toLowerCase())
                    })
                case 'Location':
                    return (requests).filter((request) => {
                        return request.district.toLowerCase().includes(this.district.toLowerCase())
                    })
                case 'Presentation':
                    return (requests).filter((request) => {
                        return request.presentation === this.presentation
                    })
                case 'Units':
                    return (requests).filter((request) => {
                        return request.unit === this.unit
                    })
                default:
                    return requests
            }

        },
    },

    methods:{
        chatWithTrader(receiverId){
            this.receiverId=receiverId
            this.chat=true
            this.displayChat=true
        },
        viewChat(receiverId){
            this.receiverId=receiverId
            this.displayChat=true
        },
        closeChat(){

            this.displayChat=false
        }
    }

}
</script>

<style scoped>

</style>
