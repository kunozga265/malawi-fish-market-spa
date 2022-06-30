<style lang="scss">

</style>

<template>
     <div>
        <toolbar/>
        <v-layout class="d-flex justify-center">
                <v-card
                    flat
                    width="800"
                    class="pa-5"
                >
                    <template>
                        <v-stepper v-model="el">
                            <v-stepper-header >
                                <v-stepper-step
                                    :complete="el > 1"
                                    step="1"
                                >
                                    Select species
                                </v-stepper-step>

                                <v-divider></v-divider>

                                <v-stepper-step
                                    :complete="el > 2"
                                    step="2"
                                >
                                    Choose Location
                                </v-stepper-step>

                                <v-divider></v-divider>

                                <v-stepper-step
                                    step="3"
                                    :complete="el > 3"
                                >
                                    Add Media
                                </v-stepper-step>

                                <v-divider></v-divider>

                                <v-stepper-step
                                    step="4"
                                    :complete="el > 4"
                                >
                                    Add Details
                                </v-stepper-step>

                                <v-divider></v-divider>

                                <v-stepper-step step="5">
                                    Summary
                                </v-stepper-step>
                            </v-stepper-header>

                            <v-stepper-items>
                                <v-stepper-content step="1">
                                    <v-card
                                        class="mt-6 mb-12"
                                        flat
                                    >
                                        <div>
                                            <v-select
                                                v-model="speciesSelected"
                                                :items="species"
                                                outlined
                                                color="blue darken-3"
                                                placeholder="Fish Species"
                                            ></v-select>
                                        </div>

                                    </v-card>

                                    <v-btn
                                        color="primary"
                                        @click="el = 2"
                                        :disabled="speciesSelected===''"
                                    >
                                        Next
                                    </v-btn>

                                </v-stepper-content>

                                <v-stepper-content step="2">
                                    <v-card
                                        class="mb-12"
                                        flat
                                    >
                                        <GmapMap
                                            :center="center"
                                            :zoom="18"
                                            map-style-id="roadmap"
                                            :options="mapOptions"
                                            style="width: 100vmin; height: 50vmin"
                                            ref="mapRef"
                                            @click="handleMapClick"
                                        >
                                            <GmapMarker
                                                :position="marker.position"
                                                :clickable="true"
                                                :draggable="true"
                                                @drag="handleMarkerDrag"
                                                @click="panToMarker"
                                            />
                                        </GmapMap>
                                        <div class="mt-5">
                                            <v-btn @click="geolocate">Reset Location</v-btn>
                                            <p>Selected Position: {{ marker.position }}</p>
                                        </div>

                                    </v-card>

                                    <v-btn
                                        color="primary"
                                        @click="el = 1"
                                        text
                                    >
                                        Previous
                                    </v-btn>

                                    <v-btn
                                        color="primary"
                                        @click="el = 3"
                                    >
                                        Next
                                    </v-btn>
                                </v-stepper-content>

                                <v-stepper-content step="3">
                                    <v-card
                                        class="mb-12"
                                        flat
                                    >
                                        <input type="file" @input="photoUpload($event.target.files[0])" />
                                        <div class="mt-5">
                                            <v-row>
                                                <v-col
                                                    v-for="(file,index) in imageFiles"
                                                    :key="index"
                                                    class="d-flex child-flex"
                                                    cols="4"
                                                >
                                                    <v-img
                                                        :src="file"
                                                        :lazy-src="file"
                                                        aspect-ratio="1"
                                                        class="grey lighten-2"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-card>

                                    <v-btn
                                        color="primary"
                                        @click="el = 2"
                                        text
                                    >
                                        Previous
                                    </v-btn>

                                    <v-btn
                                        color="primary"
                                        @click="el = 4"
                                        :disabled="imageFiles.length === 0 "
                                    >
                                        Next
                                    </v-btn>
                                </v-stepper-content>

                                <v-stepper-content step="4">
                                    <v-card
                                        class="mt-6 mb-12"
                                        flat
                                    >
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-text-field
                                                    v-model="traderName"
                                                    filled
                                                    label="Trader Name"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field
                                                    v-model="number1"
                                                    filled
                                                    label="Phone Number 1"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field
                                                    v-model="number2"
                                                    filled
                                                    label="Phone Number 2 (If available)"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field
                                                    v-model="market"
                                                    filled
                                                    label="Market"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select
                                                    v-model="district"
                                                    :items="districts"
                                                    filled
                                                    label="District"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field
                                                    v-model="price"
                                                    filled
                                                    label="Price (MWK per unit)"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select
                                                    v-model="unit"
                                                    :items="units"
                                                    filled
                                                    label="Unit"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field
                                                    v-model="amount"
                                                    filled
                                                    label="Amount of units"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select
                                                    v-model="presentation"
                                                    :items="presentations"
                                                    filled
                                                    label="Presentation"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select
                                                    v-model="statusSelected"
                                                    :items="statuses"
                                                    filled
                                                    label="Status"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-menu
                                                    ref="menu"
                                                    v-model="menu"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="date"
                                                    transition="scale-transition"
                                                    offset-y
                                                    min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="date"
                                                            label="Date"
                                                            readonly
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            filled
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                        v-model="date"
                                                        no-title
                                                        scrollable
                                                    >
                                                        <v-spacer></v-spacer>
                                                        <v-btn
                                                            text
                                                            color="primary"
                                                            @click="menu = false"
                                                        >
                                                            Cancel
                                                        </v-btn>
                                                        <v-btn
                                                            text
                                                            color="primary"
                                                            @click="$refs.menu.save(date)"
                                                        >
                                                            OK
                                                        </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select
                                                    v-model="shareWith"
                                                    :items="shareWithOptions"
                                                    filled
                                                    label="Share With"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select
                                                    v-model="alsoShareOption"
                                                    :items="alsoShareToOptions"
                                                    filled
                                                    label="Also Share To"
                                                    :rules="[rules.required]"
                                                />
                                            </v-col>
                                        </v-row>
                                    </v-card>

                                    <v-btn
                                        color="primary"
                                        @click="el = 3"
                                        text
                                    >
                                        Previous
                                    </v-btn>

                                    <v-btn
                                        color="primary"
                                        @click="el = 5"
                                        :disabled="!validation"
                                    >
                                        Next
                                    </v-btn>
                                </v-stepper-content>

                                <v-stepper-content step="5">
                                    <v-card
                                        class="mt-6 mb-12"
                                        flat
                                        width="100%"
                                    >
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Species</div>
                                                <div>{{speciesSelected}}</div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Location</div>
                                                <div>{{marker.position.lat}} {{marker.position.lng}}</div>
                                            </v-col>
                                            <v-col sm="12">
                                                <div class="blue--text darken-3 title">Media</div>
                                                <div class="mt-5">
                                                    <v-row>
                                                        <v-col
                                                            v-for="(file,index) in imageFiles"
                                                            :key="index"
                                                            class="d-flex child-flex"
                                                            cols="4"
                                                        >
                                                            <v-img
                                                                :src="file"
                                                                :lazy-src="file"
                                                                aspect-ratio="1"
                                                                class="grey lighten-2"
                                                            ></v-img>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Market</div>
                                                <div>{{market}}</div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">District</div>
                                                <div>{{district}}</div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Price per Unit</div>
                                                <div>{{price}}/{{unit}}</div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Amount</div>
                                                <div>{{amount}} {{unit}}</div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Presentation</div>
                                                <div>{{presentation}}</div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Status</div>
                                                <div>{{statusSelected}}</div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Date</div>
                                                <div>{{date}}</div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Contacts</div>
                                                {{number1}} {{number2 !=="0" || number2 !== null ?number2:''}}
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Share With</div>
                                                <div>{{shareWith}}</div>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <div class="blue--text darken-3 title">Also Share To</div>
                                                <div>{{alsoShareOption}}</div>
                                            </v-col>
                                        </v-row>
                                    </v-card>

                                    <v-btn
                                        color="primary"
                                        @click="el = 4"
                                        text
                                    >
                                        Previous
                                    </v-btn>

                                    <v-btn
                                        color="primary"
                                        @click="submit"
                                    >
                                        Submit
                                    </v-btn>
                                </v-stepper-content>
                            </v-stepper-items>
                        </v-stepper>
                    </template>

                </v-card>
        </v-layout>
     </div>
</template>

<script>
// import {db} from '@/Plugins/db'
import {database, storage} from "@/app";
import {onValue, push, ref, set, onChildAdded} from "firebase/database";
import { ref as storageRef, uploadString, getDownloadURL } from "firebase/storage";
import Toolbar from "@/components/Toolbar";

export default {
    name: "New",

    components:{
        Toolbar
    },

    data() {
        return {
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
            el:1,
            speciesSelected:'',
            species:['Batala','Bombe','Chambo','Kampango','Kapenta','Matemba','Mcheni','Mlamba','Mpasa','Ndunduma','Sanjika','Usipa','Utaka'],
            districts:[
                'Balaka',
                'Blantyre',
                'Chikwawa',
                'Chiradzulu',
                'Chitipa',
                'Dowa',
                'Karonga',
                'Kasungu',
                'Likoma',
                'Lilongwe',
                'Machinga',
                'Mangochi',
                'Mchinji',
                'Mulanje',
                'Mwanza',
                'Mzimba',
                'Neno',
                'Nkhata Bay',
                'Nkhotakota',
                'Nsanje',
                'Ntcheu',
                'Ntchisi',
                'Phalombe',
                'Rumphi',
                'Salima',
                'Thyolo',
                'Zomba',
            ],
            units:['5L Bucket','Kg','Mulu','Fish','Dozen'],
            presentations:['Smoked','Sun Dried','Para Boiled','Fresh'],
            statuses:['Available','Finished'],
            shareWithOptions:['Everyone','Admins Only'],
            alsoShareToOptions:['Whatsapp','Text Message','Market Only'],

            //selected items
            traderName:"",
            number1:"",
            number2:null,
            market:"",
            district:"",
            price:"",
            unit:"",
            amount:"",
            presentation:"",
            statusSelected:"",
            shareWith:"",
            alsoShareOption:"",

            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            marker: { position: { lat: -13.9931667, lng: 33.7785115 } },
            center: { lat: -13.9931667, lng: 33.7785115 },

            mapOptions: {
                disableDefaultUI: true,
            },
            imageFiles:[],
            info: [],
        }
    },

    created() {
        const traderRef = ref(database, 'Traders/' + this.user.data.uid + '/personalInformation');
        onValue(traderRef, (snapshot) => {
            this.info= snapshot.val()
        });

    },
    mounted() {
        this.geolocate();
    },

    computed:{
        user(){
            return this.$store.getters.user
        },
        validation(){
            if(this.traderName.length === 0 || this.traderName === "")
                return false
            else if(this.number1.length === 0 || this.number1 === "")
                return false
            else if(this.market.length === 0 || this.market === "")
                return false
            else if(this.district.length === 0 || this.district === "")
                return false
            else if(this.price.length === 0 || this.price === "")
                return false
            else if(this.unit.length === 0 || this.unit === "")
                return false
            else if(this.amount.length === 0 || this.amount === "")
                return false
            else if(this.presentation.length === 0 || this.presentation === "")
                return false
            else if(this.statusSelected.length === 0 || this.statusSelected === "")
                return false
            else if(this.shareWith.length === 0 || this.shareWith === "")
                return false
            else if(this.alsoShareOption.length === 0 || this.alsoShareOption === "")
                return false
            else
                return true
        }
    },
    methods: {
        submit(){
            const timestamp=new Date().getTime()
            const now=this.getDate(timestamp)

            const productRef = ref(database, 'Products/'+now);
            // const newChatRef = push(productRef);
            // const _lastMessageId=newChatRef.key;
            let product={
                agent:this.info.name,
                amount:this.amount,
                date:this.productDate(timestamp),
                district:this.district,
                image1:this.imageFiles[0],
                image2:this.imageFiles[1]?this.imageFiles[1]:"",
                image3:this.imageFiles[2]?this.imageFiles[2]:"",
                image4:this.imageFiles[3]?this.imageFiles[3]:"",
                latitude:this.marker.position.lat,
                longitude:this.marker.position.lng,
                market:this.market,
                number1:this.number1,
                number2:this.number2,
                'pid':now,
                presentation:this.presentation,
                price:this.price,
                shareTo:this.alsoShareOption,
                shareWith:this.shareWith,
                species:this.speciesSelected,
                status:this.statusSelected,
                traderName:this.traderName,
                uid:this.user.data.uid,
                unit:this.unit,
                dateTimestamp:timestamp,
                negativeDateTimestamp:timestamp*-1
            }

            // console.log(product)

            set(productRef, product);

            onChildAdded(productRef,(data)=>{
                const userCatalogRef = ref(database,'Traders/'+this.user.data.uid+"/Catalog/"+now)
                set(userCatalogRef, product);
            })

            this.$router.push({name:'dashboard'})
        },
        getDate(timestamp){
            let date = new Date(timestamp);
            return date.getDate()+ " "+this.getMonth((date.getMonth()+1))+ " "+date.getFullYear()+ " "+date.getHours()+ ":"+date.getMinutes()+ ":"+date.getSeconds()
        },
        productDate(timestamp){
            let date = new Date(timestamp);
            return date.getDate()+ " "+this.getMonth((date.getMonth()+1))+ " "+date.getFullYear()
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
        photoUpload(file){
            const reader=new FileReader();
            if (file){
                reader.readAsDataURL(file);
                reader.onload=(e)=>{
                   /* let result=(e.target.result).split(",")
                   console.log(result)*/

                    const timestamp=new Date().getTime();
                    const fileRef = storageRef(storage,"Product_Images/"+this.user.data.uid+"/"+this.getDate(timestamp))

                    uploadString(fileRef, e.target.result, 'data_url').then((snapshot) => {
                        getDownloadURL(fileRef).then((url)=>{
                            this.imageFiles.push(url)
                        })
                    });
                };
            }
        },
        //detects location from browser
        geolocate() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.marker.position = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                this.panToMarker();
            });
        },

        //sets the position of marker when dragged
        handleMarkerDrag(e) {
            this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        },

        //Moves the map view port to marker
        panToMarker() {
            this.$refs.mapRef.panTo(this.marker.position);
            // this.$refs.mapRef.setZoom(18);
        },

        //Moves the marker to click position on the map
        handleMapClick(e) {
            this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        },
    },
}
</script>

<style scoped>

</style>
