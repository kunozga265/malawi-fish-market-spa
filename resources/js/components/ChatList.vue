<template>
    <v-card
        flat
        class="chat-list"
        @click="$emit('view',receiverId)"
    >
        <div v-if="info && messageBody">
            <div class="subtitle-1 font-weight-bold">
                {{info.name}}
            </div>
            <div class="body-2">
                {{ messageBody.message }}
            </div>
            <div class="caption grey--text pb-2">
                {{ date(messageBody.timeStamp) }}
            </div>
            <v-divider/>
        </div>
    </v-card>
</template>

<script>
import {onValue, ref} from "firebase/database";
import {database} from "@/app";

export default {
    name: "ChatList",
    props:['receiverId','messageId'],

    data() {
        return {
            messageBody: [],
            info:[]
        }
    },

    created() {
        const traderRef = ref(database, 'Traders/' + this.receiverId + '/personalInformation');
        onValue(traderRef, (snapshot) => {
            this.info= snapshot.val()
        });

        const messageRef = ref(database, 'Chats/' + this.messageId);
        onValue(messageRef, (snapshot) => {
            this.messageBody= snapshot.val()
        });
    },

    methods:{
        date(timestamp){
            let date = new Date(timestamp);
           return date.getDate()+ "/"+(date.getMonth()+1)+ "/"+date.getFullYear()+ " "+date.getHours()+ ":"+date.getMinutes()+ ":"+date.getSeconds()
        }
    }


}
</script>

<style scoped>

</style>
