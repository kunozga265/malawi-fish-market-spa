<style lang="scss">

</style>

<template>
    <div class="d-flex justify-center">
            <v-card
                flat
                width="800"
                class="pa-5"
            >
                <template>
                    <v-stepper v-model="el">
                        <v-stepper-header >
                            <v-stepper-step
                                :complete="el > 1"
                                step="1"
                            >
                                Select species
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                :complete="el > 2"
                                step="2"
                            >
                               Detailed Description
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                step="3"
                                :complete="el > 3"
                            >
                                Payment Method
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                step="4"
                            >
                                Summary
                            </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <v-card
                                    class="mt-6 mb-12"
                                    flat
                                >
                                    <div>
                                        <v-select
                                            v-model="speciesSelected"
                                            :items="species"
                                            outlined
                                            color="blue darken-3"
                                            placeholder="Fish Species"
                                        ></v-select>
                                    </div>

                                </v-card>

                                <v-btn
                                    color="primary"
                                    @click="el = 2"
                                    :disabled="speciesSelected===''"
                                >
                                    Next
                                </v-btn>

                            </v-stepper-content>

                            <v-stepper-content step="2">
                                <v-card
                                    class="mb-12"
                                    flat
                                >
                                    <v-row>
                                        <v-col sm="6">
                                            <v-text-field
                                                v-model="buyerName"
                                                filled
                                                label="Buyer Name"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                v-model="number1"
                                                filled
                                                label="Phone Number 1"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                v-model="number2"
                                                filled
                                                label="Phone Number 2 (If available)"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                v-model="termsAndConditions"
                                                filled
                                                label="Terms and Conditions of Trade"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-select
                                                v-model="district"
                                                :items="districts"
                                                filled
                                                label="District"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                v-model="price"
                                                filled
                                                label="Price (MWK per unit)"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-select
                                                v-model="unit"
                                                :items="units"
                                                filled
                                                label="Unit"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                v-model="amount"
                                                filled
                                                label="Amount of units"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-select
                                                v-model="presentation"
                                                :items="presentations"
                                                filled
                                                label="Presentation"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-select
                                                v-model="statusSelected"
                                                :items="statuses"
                                                filled
                                                label="Status"
                                            />
                                        </v-col>
                                    </v-row>


                                </v-card>

                                <v-btn
                                    color="primary"
                                    @click="el = 1"
                                    text
                                >
                                    Previous
                                </v-btn>

                                <v-btn
                                    color="primary"
                                    @click="el = 3"
                                >
                                    Next
                                </v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="3">
                                <v-card
                                    class="mb-12"
                                    flat
                                >
                                    <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Payment Method
                                                <span>
                                                     <v-chip
                                                         class="ma-2 font-weight-bold"
                                                         color="blue lighten-4"
                                                     >
                                                    {{getPaymentMethod}}
                                                </v-chip>
                                                </span>

                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-list-item-group
                                                    v-model="paymentMethod"
                                                    color="primary"
                                                >
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title>Cash</v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title>Credit</v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-divider/>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Preferred Payment Method
                                                <span>
                                                     <v-chip
                                                         class="ma-2 font-weight-bold"
                                                         color="blue lighten-4"
                                                     >
                                                    {{getPreferredPaymentMethod}}
                                                </v-chip>
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-list-item-group
                                                    v-model="preferredPaymentMethod"
                                                    color="primary"
                                                >
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title>By Hand</v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title>TNM Mpamba</v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title >Airtel Money</v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Date Time
                                                <span>
                                                     <v-chip
                                                         class="ma-2 font-weight-bold"
                                                         color="blue lighten-4"
                                                     >
                                                    {{date}}
                                                </v-chip>
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-row justify="center">
                                                <v-date-picker v-model="date"></v-date-picker>
                                                </v-row>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                    <div class="d-flex justify-space-between pa-5">
                                        <div class="title">Total</div>
                                        <div class="title blue--text darken-3 font-weight-bold">K{{amount*price}}</div>
                                    </div>
                                </v-card>

                                <v-btn
                                    color="primary"
                                    @click="el = 2"
                                    text
                                >
                                    Previous
                                </v-btn>

                                <v-btn
                                    color="primary"
                                    @click="el=4"
                                >
                                    Next
                                </v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="4">
                                <v-card
                                    class="mb-12"
                                    flat
                                >
                                    <v-row>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Species</div>
                                            <div>{{speciesSelected}}</div>
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Terms and Conditions of Trade</div>
                                            <div>{{ termsAndConditions }}</div>
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">District</div>
                                            <div>{{district}}</div>
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Price per Unit</div>
                                            <div>{{price}}/{{unit}}</div>
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Amount</div>
                                            <div>{{amount}} {{unit}}</div>
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Presentation</div>
                                            <div>{{presentation}}</div>
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Status</div>
                                            <div>{{statusSelected}}</div>
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Date</div>
                                            <div>{{date}}</div>
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Contacts</div>
                                            {{number1}} {{number2 !=="0" || number2 !== null ?number2:''}}
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Payment Method</div>
                                            <div>{{getPaymentMethod}}</div>
                                        </v-col>
                                        <v-col sm="6">
                                            <div class="blue--text darken-3 title">Preferred Payment Method</div>
                                            <div>{{getPreferredPaymentMethod}}</div>
                                        </v-col>
                                    </v-row>

                                </v-card>

                                <v-btn
                                    color="primary"
                                    @click="el = 2"
                                    text
                                >
                                    Previous
                                </v-btn>

                                <v-btn
                                    color="primary"
                                    @click="submit"
                                >
                                    Add to cart
                                </v-btn>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </template>

            </v-card>
    </div>
</template>

<script>
// import {db} from '@/Plugins/db'
import {database, storage} from "@/app";
import {onValue, push, ref, set, onChildAdded} from "firebase/database";
import { ref as storageRef, uploadString, getDownloadURL } from "firebase/storage";

export default {
    name: "New",

    components:{

    },

    data() {
        return {
            el:1,
            speciesSelected:'',
            species:['Batala','Chambo','Matemba','Mcheni','Mlamba','Ndunduma','Usipa','Utaka'],
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
            units:['Per 5L Bucket','Per Kg','Per Mulu','Per Fish'],
            presentations:['Smoked','Sun Dried','Para Boiled','Fresh'],
            statuses:['Available','Finished'],
            shareWithOptions:['Everyone','Admins Only'],
            alsoShareToOptions:['Whatsapp','Text Message','Market Only'],

            //selected items
            buyerName:null,
            number1:null,
            number2:null,
            termsAndConditions:null,
            district:null,
            price:null,
            unit:null,
            amount:null,
            presentation:null,
            statusSelected:null,
            paymentMethod:0,
            preferredPaymentMethod:0,
            shareWith:null,
            alsoShareOption:null,

            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            marker: { position: { lat: 10, lng: 10 } },
            center: { lat: 10, lng: 10 },

            mapOptions: {
                disableDefaultUI: true,
            },
            imageFiles:[],
            info: [],
        }
    },

    created() {
        const customerRef = ref(database, 'Customers/' + this.user.data.uid + '/personalInformation');
        onValue(customerRef, (snapshot) => {
            this.info= snapshot.val()
        });

    },

    computed:{
        user(){
            return this.$store.getters.user
        },
        getPaymentMethod(){
            switch (this.paymentMethod){
                case 0:
                    return 'Cash'
                default:
                    return 'Credit'
            }
        },
        getPreferredPaymentMethod(){
            switch (this.preferredPaymentMethod){
                case 0:
                    return 'By Hand'
                case 1:
                    return 'TNM Mpamba'
                default:
                    return 'Airtel Money'
            }
        },
    },
    methods: {
        submit(){
            const timestamp=new Date().getTime()
            const now=this.getDate(timestamp)

            const paymentTimestamp=new Date(this.date).getTime()

            const customerRef = ref(database, 'Requests/'+now);
            // const newChatRef = push(productRef);
            // const _lastMessageId=newChatRef.key;
            let customer={
                customer:this.info.name,
                amount:this.amount,
                date:this.productDate(timestamp),
                district:this.district,
                termsAndConditions:this.termsAndConditions,
                number1:this.number1,
                number2:this.number2,
                'pid':now,
                presentation:this.presentation,
                price:this.price,
                paymentMethod:this.getPaymentMethod,
                preferredPaymentMethod:this.getPreferredPaymentMethod,
                paymentTimestamp:paymentTimestamp,
                species:this.speciesSelected,
                status:this.statusSelected,
                buyerName:this.buyerName,
                uid:this.user.data.uid,
                unit:this.unit,
            }

            console.log(customer)

            set(customerRef, customer);

            onChildAdded(customerRef,(data)=>{
                const userRequestRef = ref(database,'Customers/'+this.user.data.uid+"/Requests/"+now)
                set(userRequestRef, customer);

            })

            this.$router.push({name:'customer-dashboard'})
        },
        getDate(timestamp){
            let date = new Date(timestamp);
            return date.getDate()+ " "+this.getMonth((date.getMonth()+1))+ " "+date.getFullYear()+ " "+date.getHours()+ ":"+date.getMinutes()+ ":"+date.getSeconds()
        },
        productDate(timestamp){
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
    },
}
</script>

<style scoped>

</style>
