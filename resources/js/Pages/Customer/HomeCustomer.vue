<style lang="scss">
/*.presentation, .unit{
    width:100%;
    padding: 10px;

}*/

.floating-buttons{
    position: fixed;
    bottom: 60px;
    right: 0;

}
</style>

<template>
    <div>
        <v-tabs
            v-model="tab"
            dark
            background-color="blue darken-3"
            centered

        >
            <v-tabs-slider color="blue lighten-3"></v-tabs-slider>

            <v-tab>
                Selling
            </v-tab>
            <v-tab>
                Buying
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <div class="">
                    <v-row>
                        <v-col lg="3" md="5" sm="12">
                            <v-card
                                flat
                                class="pa-10"
                                tile
                                width

                            >
                                <v-navigation-drawer
                                    width="100%"
                                    floating
                                    permanent
                                >
                                    <div class="d-flex justify-space-between">
                                        <div class="headline font-weight-bold" >Digital Fish Marketing Tools</div>
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

                                        <!--                                        <v-list-item>
                                                                                    <v-list-item-icon>
                                                                                        <v-icon>mdi-basket</v-icon>
                                                                                    </v-list-item-icon>

                                                                                    <v-list-item-content>
                                                                                        <v-list-item-title class="subtitle-2">Buying</v-list-item-title>
                                                                                    </v-list-item-content>

                                                                                    <v-list-item-action>
                                                                                        <v-icon>mdi-chevron-right</v-icon>
                                                                                    </v-list-item-action>
                                                                                </v-list-item>

                                                                                <v-list-item>
                                                                                    <v-list-item-icon>
                                                                                        <v-icon>mdi-tag</v-icon>
                                                                                    </v-list-item-icon>

                                                                                    <v-list-item-content>
                                                                                        <v-list-item-title class="subtitle-2">Selling</v-list-item-title>
                                                                                    </v-list-item-content>

                                                                                    <v-list-item-action>
                                                                                        <v-icon>mdi-chevron-right</v-icon>
                                                                                    </v-list-item-action>
                                                                                </v-list-item>-->

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
                            </v-card>
                        </v-col>
                        <v-col sm="12" md="7" lg="9" class="d-flex justify-center grey lighten-4">
                            <v-card
                                flat
                                width="1000"
                                class="pa-5 grey lighten-4"
                                tile

                            >
                                <v-row
                                    class=""
                                >
                                    <product
                                        v-for="(product,index) in products"
                                        :key="index"
                                        :product="product"
                                        @chat="chatWithTrader"
                                    />
                                </v-row>

                            </v-card>
                        </v-col>

                        <!--            <v-col lg="3" class="pa-10 grey lighten-4">

                                    </v-col>-->
                    </v-row>



                    <!--        <v-fab-transition>
                                <v-btn
                                    color="blue darken-3"
                                    dark
                                    fixed
                                    bottom
                                    right
                                    :to="{name:'add-fish'}"
                                >
                    &lt;!&ndash;                <v-icon>mdi-plus</v-icon>&ndash;&gt;
                                    Add Fish
                                </v-btn>
                            </v-fab-transition>-->





                </div>
            </v-tab-item>
            <v-tab-item>
                <div class="">
                    <v-row>
                        <v-col lg="3" md="5" sm="12">
                            <v-card
                                flat
                                class="pa-10"
                                tile
                                width

                            >
                                <v-navigation-drawer
                                    width="100%"
                                    floating
                                    permanent
                                >
                                    <div class="d-flex justify-space-between">
                                        <div class="headline font-weight-bold" >Digital Fish Marketing Tools</div>
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

                                        <!--                                        <v-list-item>
                                                                                    <v-list-item-icon>
                                                                                        <v-icon>mdi-basket</v-icon>
                                                                                    </v-list-item-icon>

                                                                                    <v-list-item-content>
                                                                                        <v-list-item-title class="subtitle-2">Buying</v-list-item-title>
                                                                                    </v-list-item-content>

                                                                                    <v-list-item-action>
                                                                                        <v-icon>mdi-chevron-right</v-icon>
                                                                                    </v-list-item-action>
                                                                                </v-list-item>

                                                                                <v-list-item>
                                                                                    <v-list-item-icon>
                                                                                        <v-icon>mdi-tag</v-icon>
                                                                                    </v-list-item-icon>

                                                                                    <v-list-item-content>
                                                                                        <v-list-item-title class="subtitle-2">Selling</v-list-item-title>
                                                                                    </v-list-item-content>

                                                                                    <v-list-item-action>
                                                                                        <v-icon>mdi-chevron-right</v-icon>
                                                                                    </v-list-item-action>
                                                                                </v-list-item>-->

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
                            </v-card>
                        </v-col>
                        <v-col sm="12" md="7" lg="9" class="d-flex justify-center grey lighten-4">
                            <v-card
                                flat
                                width="1000"
                                class="pa-5 grey lighten-4"
                                tile

                            >
                                <v-row
                                    class=""
                                >
                                    <request
                                        v-for="(request,index) in requests"
                                        :key="index"
                                        :request="request"
                                        @chat="chatWithTrader"
                                    />
                                </v-row>

                            </v-card>
                        </v-col>

                        <!--            <v-col lg="3" class="pa-10 grey lighten-4">

                                    </v-col>-->
                    </v-row>
                </div>
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
                :to="{name:'customer-new'}"
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
            tab:0
        }
    },

    created() {
        const productsRef = ref(database, 'Products');
        onValue(productsRef, (snapshot) => {
            this.products=snapshot.val()
        });

        const customersRef = ref(database, 'Requests');
        onValue(customersRef, (snapshot) => {
            this.requests=snapshot.val()
        });
    },

    firebase: {
        // products: database.ref('Products'),
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
