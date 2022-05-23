<style lang="scss">

</style>

<template>
    <div class="d-flex justify-center">
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
                    <p class="headline">{{info.name}}</p>
                    <p>{{user.data.email}}</p>
                    <p>{{info.number1}}</p>
                    <v-btn
                        text
                        @click="logout"
                        color="blue darken-3"
                    >
                        Logout
                    </v-btn>
                </div>

            </v-card>
    </div>
</template>

<script>

// import {db} from '@/Plugins/db'
import {database, auth} from "@/app";
import {onValue, ref} from "firebase/database";
import {signOut} from "firebase/auth";

export default {
    name: "Profile",
    props:['uid'],

    components:{

    },

    data() {
        return {
            info: [],
        }
    },

    mounted() {
        const traderRef = ref(database, 'Customers/' + this.uid + '/personalInformation');
        onValue(traderRef, (snapshot) => {
            this.info= snapshot.val()
        });
    },

    computed:{
        user(){
            return this.$store.getters.user
        },
    },

    methods:{
        logout () {
            signOut(auth).then(() => {
                this.$router.replace({name:'welcome'})
            })
        }
    }

}
</script>

<style scoped>

</style>
