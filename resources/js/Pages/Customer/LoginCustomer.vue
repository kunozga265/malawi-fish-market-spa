<style lang="scss">
.f-button{
    width: 100%;
    border-radius: 12px;
    padding: 15px;
    text-align: center;

    color: white;
    background-color: blue;

    &:hover{
        cursor: pointer;
    }
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
                        <p class="mb-4 white--text headline">Customer Login</p>


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
                    this.$router.replace({ name: "customer-dashboard" });
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
