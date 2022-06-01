<template>
    <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
    >
        <v-card
            class="pa-2 "
            @click="dialog=true"
        >

            <div class="pt-3 title text-center">
                {{request.species}}
            </div>
            <div class=" text-center">
                {{request.buyerName}}
            </div>
            <div class="pa-1 font-weight-bold text-center">
                <v-chip
                    class="blue lighten-4" style="color: #1565C0; "
                >
                    K{{request.price}}/{{request.unit}}
                </v-chip>
            </div>
            <div class="pa-1 font-weight-bold text-center">
                <v-chip
                    class="blue lighten-4 ml-2" style="color: #1565C0; "
                >
                    {{request.amount}} {{request.unit}}
                </v-chip>
            </div>
            <div class="pa-1 font-weight-bold text-center">
                <v-chip
                    class="blue lighten-4 ml-2" style="color: #1565C0; "
                >
                    {{request.district}}, {{request.presentation}}
                </v-chip>
            </div>


        </v-card>

        <v-dialog
            v-model="dialog"
            width="500"
        >

            <v-card width="600">
                <v-card-title class="text-h5 grey lighten-2">
                    {{ request.species }}
                </v-card-title>

                <v-card-text>
<!--                    <v-card-title class="">
&lt;!&ndash;                        <span>Seller: </span>&ndash;&gt;
                        <span>{{request.amount}} {{request.species}}</span>
                    </v-card-title>
                    <v-card-subtitle class="">
&lt;!&ndash;                        <span>Status: </span>&ndash;&gt;
                        <span>{{request.status}}</span>
                    </v-card-subtitle>-->
<!--                    <div class="text-center">
                        <span>{{product.date}}</span>
                    </div>-->

                    <div class="title my-3">Detailed Description</div>

                    <v-row>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.buyerName}}</v-list-item-title>
                                    <v-list-item-subtitle>Buyer Name</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
<!--                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.species}}</v-list-item-title>
                                    <v-list-item-subtitle>Species</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>-->
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.amount}}</v-list-item-title>
                                    <v-list-item-subtitle>Amount</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.status}}</v-list-item-title>
                                    <v-list-item-subtitle>Status</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.price}}</v-list-item-title>
                                    <v-list-item-subtitle>Price</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.unit}}</v-list-item-title>
                                    <v-list-item-subtitle>Unit</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.amount}} {{request.unit}} </v-list-item-title>
                                    <v-list-item-subtitle>Amount</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.presentation}} </v-list-item-title>
                                    <v-list-item-subtitle>Presentation</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.termsAndConditions}} </v-list-item-title>
                                    <v-list-item-subtitle>Terms and Conditions</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.district}} </v-list-item-title>
                                    <v-list-item-subtitle>District</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.number1}} {{request.number2!=="0"||request.number2===null?request.number2:''}} </v-list-item-title>
                                    <v-list-item-subtitle>Contacts</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>

<!--                    <v-divider/>-->

                    <div class="title my-3">Payment Details</div>
                    <v-row>

                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.paymentMethod}}</v-list-item-title>
                                    <v-list-item-subtitle>Payment Method</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>

                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{request.paymentDeliveryMethod}}</v-list-item-title>
                                    <v-list-item-subtitle>Preferred Payment Method</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>

                        <v-col
                            sm="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{getDate(request.paymentTimestamp)}}</v-list-item-title>
                                    <v-list-item-subtitle>Payment Date</v-list-item-subtitle>
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
                        :disabled="request.uid === user.data.uid"
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
    name: "Request",
    props:['request'],

    data() {
        return {
            dialog: false,
        };
    },

    created(){

    },
    computed:{
        user(){
            return this.$store.getters.user
        },
    },

    methods:{
        viewChat(){
            this.dialog=false
            this.$emit('chat',this.request.uid)
        },
        getDate(timestamp){
            let date = new Date(timestamp);
            return date.getDate()+ " "+this.getMonth((date.getMonth()+1))+ " "+date.getFullYear()
        },
        getMonth(month){
            switch (month){
                case 1:
                    return 'Jan'
                case 2:
                    return 'Feb'
                case 3:
                    return 'Mar'
                case 4:
                    return 'Apr'
                case 5:
                    return 'May'
                case 6:
                    return 'Jun'
                case 7:
                    return 'Jul'
                case 8:
                    return 'Aug'
                case 9:
                    return 'Sep'
                case 10:
                    return 'Oct'
                case 11:
                    return 'Nov'
                case 12:
                    return 'Dec'
                default:
                    return ''


            }
        },
    }

}
</script>

<style scoped>

</style>
