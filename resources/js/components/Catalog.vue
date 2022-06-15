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
                        v-text="catalog.species"
                    ></div>

                    <div>
                        <div class="d-flex justify-start align-center">
                            <div><v-icon color="blue darken-3">mdi-currency-usd</v-icon></div>
                            <div class="ml-2 ">K{{catalog.price}}/{{catalog.unit}}</div>
                        </div>
                        <div class="d-flex justify-start align-center">
                            <div><v-icon color="blue darken-3">mdi-weight</v-icon></div>
                            <div class="ml-2 ">{{catalog.amount}} {{catalog.unit}}</div>
                        </div>
                        <div class="d-flex justify-start align-center">
                            <div><v-icon color="blue darken-3">mdi-map-marker</v-icon></div>
                            <div class="ml-2 ">{{catalog.market}}, {{catalog.district}}</div>
                        </div>
                        <div class="d-flex justify-start align-center">
                            <div><v-icon color="blue darken-3">mdi-calendar</v-icon></div>
                            <div class="ml-2 ">{{catalog.date}}</div>
                        </div>
                    </div>
                </div>
                <v-img max-width="180" :src="catalog.image1"></v-img>

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
    props:['id','catalog'],

    data() {
        return {
            status:this.catalog.status,
            items:['Available','Finished'],
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
            const product={
                agent:this.catalog.agent,
                amount:this.catalog.amount,
                date:this.catalog.date,
                district:this.catalog.district,
                image1:this.catalog.image1,
                image2:this.catalog.image2,
                image3:this.catalog.image3,
                image4:this.catalog.image4,
                latitude:this.catalog.latitude,
                longitude:this.catalog.longitude,
                market:this.catalog.market,
                number1:this.catalog.number1,
                number2:this.catalog.number2,
                'pid':this.catalog.pid,
                presentation:this.catalog.presentation,
                price:this.catalog.price,
                shareTo:this.catalog.shareTo,
                shareWith:this.catalog.shareWith,
                species:this.catalog.species,
                status:this.status,
                traderName:this.catalog.traderName,
                uid:this.catalog.uid,
                unit:this.catalog.unit,
                dateTimestamp:this.catalog.dateTimestamp,
                negativeDateTimestamp:this.catalog.negativeDateTimestamp
            }

            updates['/Products/' + this.id] = product
            updates['/Traders/'+this.user.data.uid + "/Catalog/" + this.id] = product


            update(ref(database), updates);
        }
    }

}
</script>

<style scoped>

</style>
