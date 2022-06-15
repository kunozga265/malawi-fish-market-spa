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

                    <div>
                        <div class="mb-4">
                            <p class="white--text headline">Trader Login</p>
                            <span class="red--text">{{error}}</span>
                        </div>
                        <v-radio-group
                            v-model="loginOption"
                            row
                        >
                            <v-radio
                                label="Via Phone Number"
                                value="phone-number"
                                dark
                                color="primary"
                            ></v-radio>
                            <v-radio
                                label="Via Email"
                                value="email"
                                dark
                                color="primary"
                            ></v-radio>

                        </v-radio-group>


                        <div v-if="loginOption==='email'">

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
                            <p class="white--text body-2 text-center">Log in or sign up with google</p>
                        </div>
                        <div v-else>
                            <div v-if="verify">
                                <v-text-field
                                    v-model="form.phoneNumber"
                                    label="Phone Number"
                                    filled
                                    background-color="white"
                                    class="rounded-lg"
                                    prefix="+265"
                                ></v-text-field>

                                <div id="recaptcha-container"></div>

                                <div v-if="loading" class="text-center mb-3">
                                    <v-progress-circular
                                        indeterminate
                                        color="primary"
                                    ></v-progress-circular>
                                </div>
                                <div v-else class="mb-3 f-button blue darken-3" @click="phoneNumberSubmit">
                                    Send Verification Code
                                </div>
                            </div>
                            <div v-else>
                                <v-text-field
                                    v-model="form.code"
                                    label="Verification code"
                                    filled
                                    background-color="white"
                                    class="rounded-lg"
                                ></v-text-field>

                                <div v-if="loading" class="text-center mb-3">
                                    <v-progress-circular
                                        indeterminate
                                        color="primary"
                                    ></v-progress-circular>
                                </div>
                                <div v-else class="mb-3 f-button blue darken-3" @click="verifyPhoneNumber">
                                    Verify
                                </div>
                            </div>
                            <p class="white--text body-2">You will receive an sms with the verification code.</p>
                        </div>



<!--                        <div class="f-button grey darken-3" >
                            Login with Google
                        </div>-->

                        <div class="logos d-flex justify-space-between align-center">
                            <div>
                                <img
                                    src="/images/logos/luanar_logo.png"
                                />
                            </div>
                            <div>
                                <img
                                    src="/images/logos/african_alliance_logo.png"
                                />
                            </div>
                            <div>
                                <img
                                    src="/images/logos/michigan_logo.png"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </v-main>
    </v-app>
</template>

<script>

import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {onValue, ref} from "firebase/database";
import {database,auth} from "@/app";

export default {
    name: "Login",

    data() {
        return {
            form: {
                email: "",
                password: "",
                phoneNumber: "",
                code: "",
            },
            error: null,
            show: false,
            loginOption: "phone-number",
            verify:true,
            loading:false,
        };
    },

    mounted() {
        const auth=getAuth()
        auth.languageCode='en'
        window.recaptchaVerifier=new RecaptchaVerifier('recaptcha-container',{
            'size': 'invisible',
            'callback': (response) => {
                // console.log(response)
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            },
        }, auth);

    },
    computed:{
      phoneNumber(){
          return "+265" + this.form.phoneNumber
      }
    },

    methods: {
        phoneNumberSubmit(){
            this.loading=true
            const appVerifier=window.recaptchaVerifier;

            const auth=getAuth();
            signInWithPhoneNumber(auth,this.phoneNumber,appVerifier)
            .then((confirmationResult)=>{
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                this.verify=!this.verify
                this.loading=false
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                window.recaptchaVerifier.render().then(function(widgetId) {
                    grecaptcha.reset(widgetId);
                });
                if (error.code==="auth/user-not-found")
                    this.error="Invalid credentials"
                else
                    this.error = error.message;

                this.loading=false
            });
        },
        verifyPhoneNumber(){
            this.loading=true
           confirmationResult.confirm(this.form.code).then((result) => {
                // User signed in successfully.
               const user = result.user;

               this.manageLogin(user)
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
               if (error.code==="auth/user-not-found")
                   this.error="Invalid credentials"
               else
                   this.error = error.message;

                this.loading=false

            });
        },

        submit() {
            const auth=getAuth()
            signInWithEmailAndPassword(auth,this.form.email, this.form.password)
                .then(data => {

                    this.manageLogin(data.user)

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

                    this.manageLogin(user)

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
        },
        manageLogin(user){
            //commit user data
            this.$store.dispatch("fetchUser", {
                email:user.email,
                uid:user.uid
            });

            const traderRef = ref(database, 'Traders/' + user.uid + '/personalInformation');
            onValue(traderRef, (snapshot) => {
                if(snapshot.val()){
                    this.$store.dispatch("setUserInfo", snapshot.val());
                    this.$store.dispatch("setUserType", "Trader");
                    this.$router.replace({ name: "dashboard" });
                }else{
                    this.$router.push({name:"personal-information",params:{type:'trader',phoneNumber:this.phoneNumber}})
                }
            });
        }
    }
};
</script>

<style scoped>

</style>
