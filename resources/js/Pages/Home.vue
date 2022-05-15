<style lang="scss">
/*.presentation, .unit{
    width:100%;
    padding: 10px;

}*/
</style>

<template>
    <div class="d-flex justify-center">
            <v-card
                flat
                width="600"
                class="pa-5"
            >
                <v-row
                    class=""
                >
                    <product
                        v-for="(product,index) in products"
                        :key="index"
                        :product="product"
                   />
                </v-row>



            </v-card>
        <v-fab-transition>
            <v-btn
                color="blue darken-3"
                dark
                absolute
                bottom
                right
                :to="{name:'add-fish'}"
            >
<!--                <v-icon>mdi-plus</v-icon>-->
                Add Fish
            </v-btn>
        </v-fab-transition>





    </div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import Product from "@/components/Product";

// import {db} from '@/Plugins/db'
import {database} from "@/app";
import {onValue, ref} from "firebase/database";

export default {
    name: "Home",

    components:{
        AppLayout,
        Product
    },

    data() {
        return {
            products: [],
            value:1
        }
    },

    created() {
        const productsRef = ref(database, 'Products');
        onValue(productsRef, (snapshot) => {
            this.products=snapshot.val()
        });
    },

    firebase: {
        // products: database.ref('Products'),
    },

}
</script>

<style scoped>

</style>
