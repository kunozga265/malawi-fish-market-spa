<style lang="scss">

</style>

<template>

    <v-col
        cols="12"
    >
        <v-card
            flat
            class=""
        >
            <div class="d-flex flex-no-wrap justify-space-between py-5">

                <div>
                    <div
                        class="text-h5 text--primary"
                        v-text="request.species"
                    ></div>

                    <div>
                        <div class="d-flex justify-start align-center">
                            <div><v-icon color="blue darken-3">mdi-currency-usd</v-icon></div>
                            <div class="ml-2 ">K{{request.price}}/{{request.unit}}</div>
                        </div>
                        <div class="d-flex justify-start align-center">
                            <div><v-icon color="blue darken-3">mdi-weight</v-icon></div>
                            <div class="ml-2 ">{{request.amount}} {{request.unit}}</div>
                        </div>
                        <div class="d-flex justify-start align-center">
                            <div><v-icon color="blue darken-3">mdi-map-marker</v-icon></div>
                            <div class="ml-2 ">{{request.district}}</div>
                        </div>
                        <div class="d-flex justify-start align-center">
                            <div><v-icon color="blue darken-3">mdi-calendar</v-icon></div>
                            <div class="ml-2 ">{{request.date}}</div>
                        </div>
                    </div>
                </div>

            </div>

            <v-select
                v-model="status"
                :items="items"
                outlined
                color="blue darken-3"
            ></v-select>

            <v-divider></v-divider>
        </v-card>
    </v-col>

</template>

<script>


import {database} from "@/app";
import {onValue, ref, update} from "firebase/database";

export default {
    name: "Catalog",
    props:['id','request'],

    data() {
        return {
            status:this.request.status,
            items:['Available','Fulfilled'],
        }
    },

    computed: {
        user(){
            return this.$store.getters.user
        }
    },
    watch:{
        status(){
            const updates = {}

            const request={
                amount:this.request.amount,
                date:this.request.date,
                district:this.request.district,
                termsAndConditions:this.request.termsAndConditions,
                number1:this.request.number1,
                number2:this.request.number2,
                'pid':this.request.pid,
                presentation:this.request.presentation,
                price:this.request.price,
                paymentMethod:this.request.paymentMethod,
                paymentDeliveryMethod:this.request.paymentDeliveryMethod,
                paymentTimestamp:this.request.paymentTimestamp,
                species:this.request.species,
                status:this.status,
                buyerName:this.request.buyerName,
                uid:this.request.uid,
                unit:this.request.unit,
                gender:this.request.gender,
                dateTimestamp:this.request.dateTimestamp,
                negativeDateTimestamp:this.request.negativeDateTimestamp
            }

            updates['/Requests/' + this.id] = request
            updates['/Customers/'+this.user.data.uid + "/Requests/" + this.id] = request

            update(ref(database), updates);
        }
    }

}
</script>

<style scoped>

</style>
