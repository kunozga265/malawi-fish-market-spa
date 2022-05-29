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

.google_signin{
    width: 100%;
    height: 60px;

    &:hover{
        cursor: pointer;
    }
}



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
                            <p class="white--text headline">Customer Login</p>
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

                        <div class="mb-3 f-button blue darken-3" @click="submit">
                            Login
                        </div>

                        <img class="google_signin" src="/images/google_signin.svg" alt="" @click="googleSignIn">
<!--                        <div class="f-button grey darken-3" >
                            Login with Google
                        </div>-->

                    </div>
                </div>
            </div>
        </v-main>
    </v-app>
</template>

<script>

import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {onValue, ref} from "firebase/database";
import {database} from "@/app";

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

                    console.log(data)

                    /*//commit user data
                    this.$store.dispatch("fetchUser", {
                        email:data.user.email,
                        uid:data.user.uid
                    });

                    const customerRef = ref(database, 'Customers/' + data.user.uid + '/personalInformation');
                    onValue(customerRef, (snapshot) => {
                        this.$store.dispatch("setUserInfo", snapshot.val());
                        this.$store.dispatch("setUserType", "Customer");
                    });

                    this.$router.replace({ name: "dashboard" });*/
                })
                .catch(err => {
                    if (err.code==="auth/user-not-found")
                        this.error="Invalid credentials"
                    else
                        this.error = err.message;
                });
        },
        googleSignIn(){
            const auth = getAuth();
            const provider = new GoogleAuthProvider();

            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...

                    //commit user data
                    this.$store.dispatch("fetchUser", {
                        email:user.email,
                        uid:user.uid
                    });

                    const customerRef = ref(database, 'Customers/' + user.uid + '/personalInformation');
                    onValue(customerRef, (snapshot) => {
                        if(snapshot.val()){
                            this.$store.dispatch("setUserInfo", snapshot.val());
                            this.$store.dispatch("setUserType", "Customer");
                            this.$router.replace({ name: "dashboard" });
                        }else{
                            this.$router.push({name:"personal-information"})
                        }
                    });

                }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

                this.error=error.message
            });
        }
    }
};
</script>

<style scoped>

</style>
