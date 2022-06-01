<style lang="scss">

</style>

<template>
    <div>
        <toolbar/>
        <v-layout class="d-flex justify-center">
            <v-card
                flat
                width="600"
                class="pa-5"
            >
                <v-row
                    class=""
                >
                    <catalog
                        v-for="(catalog,index) in catalogs"
                        :key="index"
                        :id="index"
                        :catalog="catalog"
                    />

                    <request-item
                        v-for="(request,index) in requests"
                        :key="index"
                        :id="index"
                        :request="request"
                    />

                </v-row>
            </v-card>
        </v-layout>
    </div>

</template>

<script>


import {database} from "@/app";
import {onValue, ref} from "firebase/database";
import Toolbar from "@/components/Toolbar";
import Catalog from "@/components/Catalog";
import RequestItem from "@/components/RequestItem";

export default {
    name: "Catalogs",

    components:{
        Toolbar,
        Catalog,
        RequestItem
    },

    data() {
        return {
            catalogs: [],
            requests: [],
            items:['Available','Finished'],
        }
    },

    mounted() {
        if(this.isTrader){
            const catalogRef = ref(database, 'Traders/' + this.user.data.uid + '/Catalog');
            onValue(catalogRef, (snapshot) => {
                this.catalogs=snapshot.val()
            });
        }else{
            const catalogRef = ref(database, 'Customers/' + this.user.data.uid + '/Requests');
            onValue(catalogRef, (snapshot) => {
                this.requests=snapshot.val()
            });
        }

    },
    computed: {
        user(){
            return this.$store.getters.user
        },
        isTrader(){
            return this.user.type==="Trader"
        }
    },

}
</script>

<style scoped>

</style>
