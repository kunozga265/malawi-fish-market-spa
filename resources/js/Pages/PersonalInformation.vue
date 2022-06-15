<style lang="scss">



</style>

<template>
    <v-app>
        <v-main>
            <div
                class="d-flex justify-center align-center background"
                style="height: 100vh;"
            >
                <div
                    id="login"
                    class=" pa-10"
                >
                    <img src="/images/logos/fish_app_logo.png" alt="">
<!--                    <p class="display-1 text-center white&#45;&#45;text mb-16">
                        FISH MARKET
                    </p>-->
                    <div>
                        <div class="mb-4">
                            <p class="white--text headline">Add Personal Information</p>
                            <span class="red--text">{{error}}</span>
                        </div>


                        <v-text-field
                            v-model="form.name"
                            label="Full Name"
                            filled
                            background-color="white"
                            class="rounded-lg"
                        ></v-text-field>

                        <v-text-field
                            v-model="form.number1"
                            label="Phone Number 1"
                            filled
                            background-color="white"
                            class="rounded-lg"
                        ></v-text-field>

                        <v-text-field
                            v-model="form.number2"
                            label="Phone Number 2"
                            hint="Optional"
                            filled
                            background-color="white"
                            class="rounded-lg"
                        ></v-text-field>

                        <div class="mb-3 f-button blue darken-3" @click="submit">
                            Finish Sign Up
                        </div>

                    </div>
                </div>
            </div>
        </v-main>
    </v-app>
</template>

<script>

import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {set, ref, onChildAdded} from "firebase/database";
import {database} from "@/app";

export default {
    name: "Login",
    props:['type','phoneNumber'],

    data() {
        return {
            form: {
                name: "",
                number1: this.phoneNumber,
                number2: ""
            },
            error: null,
            show: false,
        };
    },
    computed:{
      user(){
          return this.$store.getters.user
      }
    },
    methods: {
        submit() {
            let infoRef=""

            if(this.type==="customer")
                infoRef=ref(database,"Customers/"+this.user.data.uid+"/personalInformation")
            else
                infoRef=ref(database,"Traders/"+this.user.data.uid+"/personalInformation")

            set(infoRef,{
                name: this.form.name,
                number1: this.form.number1,
                number2: this.form.number2,
                uid:this.user.data.uid
            })

            onChildAdded(infoRef,(data)=>{
                this.$store.dispatch("setUserInfo", {
                    name: this.form.name,
                    number1: this.form.number1,
                    number2: this.form.number2,
                    uid:this.user.data.uid
                });
            })

            this.$router.push({name:'dashboard'})
        },
    }
};
</script>

<style scoped>

</style>
