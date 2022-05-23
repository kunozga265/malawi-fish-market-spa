<style lang="scss">


</style>
<template>
    <v-card
        flat
        min-height="600"
        class="chat rounded-xl "
        outlined
    >
        <div class="chat-header pa-5 blue darken-3 white--text title">
            Chat List
        </div>

        <div class="chat-text">

            <chat-list
                v-for="(chatList,index) in chatLists"
                :key="index"
                :message-id="chatList.lastMessageId"
                :receiver-id="chatList.id"
                @view="viewChat"
            />

        </div>

    </v-card>
</template>

<script>
import {onValue, ref} from "firebase/database";
import {database} from "@/app";
import ChatList from "@/components/ChatList";

export default {
    name: "ChatLists",

    components:{
      ChatList
    },

    data() {
        return {
            chatLists: [],
        }
    },

    created() {
        const chatListsRef = ref(database, 'ChatList/' + this.user.data.uid);
        onValue(chatListsRef, (snapshot) => {
            this.chatLists= snapshot.val()
        });

    },

    computed:{
        user(){
            return this.$store.getters.user
        },
        chatListWithMessages(){

        },

    },

    methods:{
        viewChat(receiverId){
            this.$emit('view',receiverId)
        }
    }

}
</script>

<style scoped>

</style>
