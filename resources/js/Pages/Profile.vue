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

                <div class="text-center">
                    <v-avatar
                        color="blue darken-3"
                        size="128"
                    >
                        <v-icon dark>
                            mdi-account
                        </v-icon>
                    </v-avatar>
                </div>

                <div class="text-center mt-5">
                    <p class="headline">{{user.info.name}}</p>
                    <p>{{user.data.email}}</p>
                    <p>{{user.info.number1}}</p>
<!--                    <v-btn
                        text
                        @click="logout"
                        color="blue darken-3"
                    >
                        Logout
                    </v-btn>-->
                </div>

                <div class="text-center mt-5">
                    <div class="title blue--text darken-3">About</div>
                    Developed and supported by LUANAR & MSU teams led by Dr. Samson Katengeza, Prof Emmanuel Kaunda, Dr. Abigail Bennet, Edith Gondwe, Emma Rice, Patrick Chimseu, Gehazi Jenda and Kunozga Mlowoka with input from many other colleagues and stakeholders.
                </div>

                <div class="text-center mt-10">
                    <div v-show="user.type==='Trader'" class="mb-3 f-button blue darken-3" @click="iWantToBuy">
                        I Want To Buy
                    </div>
                    <div v-show="user.type==='Customer'" class="mb-3 f-button blue darken-3" @click="iWantToSell">
                        I Want To Sell
                    </div>
                    <div class="mb-3 f-button blue darken-3" @click="logout">
                        Logout
                    </div>
                </div>


            </v-card>
        </v-layout>
    </div>

</template>

<script>

// import {db} from '@/Plugins/db'
import {database, auth} from "@/app";
import {onValue, ref} from "firebase/database";
import {signOut} from "firebase/auth";
import Toolbar from "@/components/Toolbar";

export default {
    name: "Profile",

    components:{
        Toolbar
    },

    data() {
        return {
            info: [],
        }
    },

    mounted() {

    },

    computed:{
        user(){
            return this.$store.getters.user
        },
    },

    methods:{
        logout () {
            signOut(auth).then(() => {
                this.$store.dispatch("logout");
                this.$router.replace({name:'welcome'})
            })
        },
        iWantToSell () {
            signOut(auth).then(() => {
                this.$store.dispatch("logout");
                this.$router.replace({name:'i-want-to-sell'})
            })
        },
        iWantToBuy () {
            signOut(auth).then(() => {
                this.$store.dispatch("logout");
                this.$router.replace({name:'i-want-to-buy'})
            })
        }

    }

}
</script>

<style scoped>

</style>
