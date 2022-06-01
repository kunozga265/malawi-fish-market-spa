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

    .logos{
        padding: 8px 20px;
        background-color: white;
        border-radius: 12px;

        img{
            max-height: 95px;
            padding: 0;
        }
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
<!--                    <h1 class="text-center white&#45;&#45;text mb-16">
                        FISH MARKET
                    </h1>-->
                    <div>
                        <router-link :to="{name:'i-want-to-buy'}">
                            <div class="f-button blue darken-3 my-5">
                                I want To Buy
                            </div>
                        </router-link >

                        <router-link :to="{name:'i-want-to-sell'}">
                            <div class="f-button blue darken-3 my-5">
                                I want To Sell
                            </div>
                        </router-link >
                    </div>

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
