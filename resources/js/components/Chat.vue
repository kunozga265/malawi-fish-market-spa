<style lang="scss">
.chat{
    position: fixed;
    right: 20px;
    bottom: 120px;
    width: 400px;
    height: 600px;

    .chat-header {
        position: absolute;
        top: 0;
        width: 100%;
    }

    .chat-text-messages{
        padding: 82px 10px 20px 10px;
        overflow-y: scroll;
        max-height: 474px;
    }

    .chat-field {
        width: 100%;
    }

    .chat-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

}

</style>
<template>

    <v-card
        flat
        min-height="600"
        class="chat rounded-xl "
        outlined
    >

        <div class="chat-header pa-5 blue darken-3 white--text title">
            <span class="float-left" ><v-icon dark @click="$emit('close')">mdi-chevron-left</v-icon></span>
            <span class="ml-2 text-center "> {{info.name}}</span>

        </div>
        <div class="chat-text-messages">
            <div
                v-if="receiverId"
                v-for="(message,index) in messages"
                :key="index"
            >
                <div class="py-1" v-if="message.receiver===receiverId && message.sender===user.data.uid">
                    <div class="d-flex justify-end">
                        <div class=" pa-4 rounded-bl-xl rounded-r-xl blue lighten-4">
                            {{message.message}}
                        </div>
                    </div>
                    <div class="caption text-right">
                        {{date(message.timeStamp)}}
                    </div>
                </div>
                <div class="py-1" v-else-if="message.receiver===user.data.uid && message.sender===receiverId">
                    <div class="d-flex">
                        <div class=" pa-4 rounded-bl-xl rounded-r-xl grey lighten-2">
                            {{message.message}}
                        </div>
                    </div>
                    <div class="caption">
                        {{date(message.timeStamp)}}
                    </div>
                </div>



            </div>
        </div>
        <div class="chat-footer">
            <div class="chat-field">
<!--                <textarea name="message" id="" placeholder="Enter Message"></textarea>-->
                <v-textarea
                    v-model="chatMessage"
                    placeholder="Enter a message"
                    rows="3"
                    filled
                    append-icon="mdi-send"
                    @click:append="sendMessage"
                />
            </div>


        </div>


    </v-card>

</template>

<script>
import {onValue, ref, set, push, onChildAdded} from "firebase/database";
import {database} from "@/app";

export default {
    name: "Chat",
    props:["receiverId"],

    data() {
        return {
            messages: [],
            info:[],
            chatMessage:""
        }
    },

    created() {
        const messagesRef = ref(database, 'Chats');
        onValue(messagesRef, (snapshot) => {
            this.messages= snapshot.val()
        });
    },
    computed:{
        user(){
            return this.$store.getters.user
        },
    },

    watch:{
        receiverId:function () {
            const traderRef = ref(database, 'Traders/' + this.receiverId + '/personalInformation');
            onValue(traderRef, (snapshot) => {
                this.info= snapshot.val()
            });
        }
    },
    methods:{
        date(timestamp){
            let date = new Date(timestamp);
            return date.getDate()+ "/"+(date.getMonth()+1)+ "/"+date.getFullYear()+ " "+date.getHours()+ ":"+date.getMinutes()+ ":"+date.getSeconds()
        },
        sendMessage(){
            const chatListRef = ref(database, 'Chats');
            const newChatRef = push(chatListRef);
            const _lastMessageId=newChatRef.key;
            set(newChatRef, {
                sender: this.user.data.uid,
                receiver: this.receiverId,
                message: this.chatMessage,
                timeStamp: new Date().getTime(),
                isSeen: false,
            });

            onChildAdded(newChatRef,(data)=>{
                //create chat list node
                const chatRef2 = ref(database,'ChatList/'+this.receiverId+"/"+this.user.data.uid)
                set(chatRef2, {
                    id: this.user.data.uid,
                    lastMessageId: _lastMessageId,
                });

                //create chat list node
                const chatRef1 = ref(database,'ChatList/'+this.user.data.uid+"/"+this.receiverId)
                set(chatRef1, {
                    id: this.receiverId,
                    lastMessageId: _lastMessageId,
                });
            })

            this.chatMessage=""

        }
    }
}
</script>

<style scoped>

</style>
