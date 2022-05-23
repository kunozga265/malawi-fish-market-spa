<template>
    <v-col
        sm="6"
        md="6"
        lg="4"
    >
        <v-card
            class="pa-2 "
            height="100%"
            @click="dialog=true"
        >
            <v-img
                height="250"
                :src="product.image1"
            ></v-img>

            <div class="mt-3 text-center headline">{{product.species}}</div>

            <div class="blue lighten-4 pa-2 mx-5 my-2 text-center rounded-pill caption font-weight-bold" style="color: #1565C0; ">
                K{{product.price}}/{{product.unit}}
            </div>

            <div class="blue lighten-4 pa-2 mx-5 my-2 text-center rounded-pill caption font-weight-bold" style="color: #1565C0; ">
                {{product.district}}/{{product.presentation}}
            </div>

        </v-card>

        <v-dialog
            v-model="dialog"
            width="500"
        >

            <v-card width="600">
                <v-card-title class="text-h5 grey lighten-2">
                    {{ product.species }}
                </v-card-title>
                <v-carousel hide-delimiters>
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                </v-carousel>

                <v-card-text>
                    <v-card-title class="">
<!--                        <span>Seller: </span>-->
                        <span>{{product.traderName}}</span>
                    </v-card-title>
                    <v-card-subtitle class="">
<!--                        <span>Status: </span>-->
                        <span>{{product.status}}</span> | <span>{{product.date}}</span>
                    </v-card-subtitle>
<!--                    <div class="text-center">
                        <span>{{product.date}}</span>
                    </div>-->

                    <v-divider/>

                    <v-row>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-action>
                                    <v-icon>mdi-currency-usd</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{product.price}}</v-list-item-title>
                                    <v-list-item-subtitle>Price</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-action>
                                    <v-icon>mdi-bucket</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{product.unit}}</v-list-item-title>
                                    <v-list-item-subtitle>Unit</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-action>
                                    <v-icon>mdi-weight</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{product.amount}} {{product.unit}} </v-list-item-title>
                                    <v-list-item-subtitle>Amount</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-action>
                                    <v-icon>mdi-fish</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{product.presentation}} </v-list-item-title>
                                    <v-list-item-subtitle>Presentation</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-action>
                                    <v-icon>mdi-store-marker</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{product.market}} </v-list-item-title>
                                    <v-list-item-subtitle>Market</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-action>
                                    <v-icon>mdi-map-marker</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{product.district}} </v-list-item-title>
                                    <v-list-item-subtitle>District</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-action>
                                    <v-icon>mdi-phone-classic</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{product.number1}} {{product.number2!=="0"?product.number2:''}} </v-list-item-title>
                                    <v-list-item-subtitle>Contacts</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn
                        color="primary"
                        text
                        @click="viewChat"
                    >
                        Chat
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                        cLOSE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>

</template>

<script>
export default {
    name: "Product",
    props:['product'],

    data() {
        return {
            dialog: false,
            items:[]
        };
    },

    created(){
        this.items.push({
            src: this.product.image1,
        },)
    },

    methods:{
        viewChat(){
            this.dialog=false
            this.$emit('chat',this.product.uid)
        }
    }

}
</script>

<style scoped>

</style>
