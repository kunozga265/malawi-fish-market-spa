<template>
    <v-app>
        <v-main>
            <v-toolbar
                dark
                color="blue darken-3"
                flat
            >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Malawi Fish Market</v-toolbar-title>

            </v-toolbar>

            <router-view></router-view>


        </v-main>
        <v-bottom-navigation
            :value="value"
            background-color="blue darken-3"
            grow
            dark
        >
            <!--            <router-link :to="{name:'login'}">

                        </router-link>-->
            <v-btn :to="{name:'dashboard'}">
                <span>Market</span>

                <v-icon>mdi-store</v-icon>
            </v-btn>

            <v-btn :to="{name:'dashboard'}">
                <span>Chat</span>

                <v-icon>mdi-chat</v-icon>
            </v-btn>

            <v-btn :to="{name:'catalog',params:{uid:user.data.uid}}">
                <span>Catalog</span>

                <v-icon>mdi-book-open</v-icon>
            </v-btn>

            <v-btn :to="{name:'profile',params:{uid:user.data.uid}}">
                <span>Profile</span>

                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script>

    export default {
        components: {

        },

        data() {
            return {
                value:1
            }
        },

        methods: {

        },
        computed:{
            user(){
                return this.$store.getters.user
            },
        }
    }
</script>
