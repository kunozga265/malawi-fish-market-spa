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
            return date.getDate()+ "/"+this.getMonth((date.getMonth()+1))+ "/"+date.getFullYear()+ " "+date.getHours()+ ":"+date.getMinutes()+ ":"+date.getSeconds()
        },
        getMonth(month){
            switch (month){
                case 1:
                    return 'Jan'
                case 2:
                    return 'Feb'
                case 3:
                    return 'Mar'
                case 4:
                    return 'Apr'
                case 5:
                    return 'May'
                case 6:
                    return 'Jun'
                case 7:
                    return 'Jul'
                case 8:
                    return 'Aug'
                case 9:
                    return 'Sep'
                case 10:
                    return 'Oct'
                case 11:
                    return 'Nov'
                case 12:
                    return 'Dec'
                default:
                    return ''


            }
        },
    }


}
</script>

<style scoped>

</style>
