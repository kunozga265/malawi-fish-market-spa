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

#login{
    //background-color: rgba(0,0,0,0);
    width: 500px;

    img{
        width: 100%;
        padding: 0 60px;
    }
}



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
<!--                    <h1 class="text-center white&#45;&#45;text mb-16">
                        FISH MARKET
                    </h1>-->
                    <div>
                        <router-link :to="{name:'login'}">
                            <div class="f-button blue darken-3 my-5">
                                Trader
                            </div>
                        </router-link >

                        <router-link :to="{name:'login-customer'}">
                        <div class="f-button blue darken-3">
                            Customer
                        </div>
                        </router-link>

                    </div>
                </div>
            </v-layout>
        </v-main>
    </v-app>
</template>

<script>


export default {
    name: "Login",

    components:{

    },

    data() {
        return {
            products: [],
        }
    },

}
</script>

<style scoped>

</style>
