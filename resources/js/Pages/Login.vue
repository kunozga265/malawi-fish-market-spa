<style lang="scss">
.f-button{
    width: 100%;
    border-radius: 12px;
    padding: 15px;
    text-align: center;

    color: white;
    background-color: blue;
}

a{
    text-decoration: none;
}

.background{
    background-image: url('/images/market.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgba(0,0,0,0.6);
    background-blend-mode: darken;
}

/*#login{
    background-color: rgba(0,0,0,0);
}*/



</style>

<template>
    <v-app>
        <v-main>
            <v-layout
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
                            <p class="white--text headline">Trader Login</p>
                            <span class="red--text">{{error}}</span>
                        </div>

                        <v-text-field
                            v-model="form.email"
                            label="Email Address"
                            filled
                            background-color="white"
                            class="rounded-lg"
                        ></v-text-field>

                        <v-text-field
                            v-model="form.password"
                            :type="show ? 'text' : 'password'"
                            label="Password"
                            filled
                            background-color="white"
                            class="rounded-lg"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show = !show"
                        ></v-text-field>

                        <div class="f-button blue darken-3" @click="submit">
                            Login
                        </div>

                    </div>
                </div>
            </v-layout>
        </v-main>
    </v-app>
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {onValue, ref} from "firebase/database";
import {database} from "@/app";
import store from "@/Plugins/store";

export default {
    name: "Login",

    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            error: null,
            show: false,
        };
    },
    methods: {
        submit() {
            const auth=getAuth()
            signInWithEmailAndPassword(auth,this.form.email, this.form.password)
                .then(data => {

                    //commit user data
                    this.$store.dispatch("fetchUser", {
                        email:data.user.email,
                        uid:data.user.uid
                    });

                    const traderRef = ref(database, 'Traders/' + data.user.uid + '/personalInformation');
                    onValue(traderRef, (snapshot) => {
                        this.$store.dispatch("setUserInfo", snapshot.val());
                        this.$store.dispatch("setUserType", "Trader");
                    });

                    this.$router.replace({ name: "dashboard" });
                })
                .catch(err => {
                    this.error = err.message;
                });
        }
    }
};
</script>

<style scoped>

</style>
