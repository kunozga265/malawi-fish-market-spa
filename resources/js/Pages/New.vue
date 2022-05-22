<style lang="scss">

</style>

<template>
    <div class="d-flex justify-center">
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

                            <v-stepper-step step="3">
                                Add Media
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="4">
                                Add Details
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
                                    color="grey lighten-1"

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
<!--                                    <button @click="geolocate">Detect Location</button>

                                    <p>Selected Position: {{ marker.position }}</p>-->
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
                                    color="grey lighten-1"
                                    height="200px"
                                >
                                    <input type="file" @input="photoUpload($event.target.files[0])" />
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
                                        <v-col sm="6">
                                            <v-text-field
                                                filled
                                                label="Trader Name"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                filled
                                                label="Phone Number 1"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                filled
                                                label="Phone Number 2 (If available)"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                filled
                                                label="Market"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-select
                                                :items="districts"
                                                filled
                                                label="District"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                filled
                                                label="Price (MWK per unit)"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-select
                                                :items="units"
                                                filled
                                                label="Unit"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-text-field
                                                filled
                                                label="Amount of units"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-select
                                                :items="presentations"
                                                filled
                                                label="Presentation"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-select
                                                :items="statuses"
                                                filled
                                                label="Status"
                                            />
                                        </v-col>
                                        <v-col sm="6">
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
                                        <v-col sm="6">
                                            <v-select
                                                :items="shareWithOptions"
                                                filled
                                                label="Share With"
                                            />
                                        </v-col>
                                        <v-col sm="6">
                                            <v-select
                                                :items="alsoShareToOptions"
                                                filled
                                                label="Also Share To"
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
                                >
                                    Summary
                                </v-btn>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </template>

            </v-card>
    </div>
</template>

<script>
// import {db} from '@/Plugins/db'
import {database, storage} from "@/app";
import {onValue, ref} from "firebase/database";
import { ref as storageRef, uploadString } from "firebase/storage";

export default {
    name: "Home",

    components:{

    },

    data() {
        return {
            el:1,
            speciesSelected:'',
            species:['Batala','Chambo','Matemba','Mcheni','Mlamba','Ndunduma','Usipa','Utaka'],
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
            units:['Per 5L Bucket','Per Kg','Per Mulu','Per Fish'],
            presentations:['Smoked','Sun Dried','Para Boiled','Fresh'],
            statuses:['Available','Finished'],
            shareWithOptions:['Everyone','Admins Only'],
            alsoShareToOptions:['Whatsapp','Text Message','Market Only'],

            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            marker: { position: { lat: 10, lng: 10 } },
            center: { lat: 10, lng: 10 },

            mapOptions: {
                disableDefaultUI: true,
            },
        }
    },

    created() {

    },
    mounted() {
        this.geolocate();
    },

    computed:{
        user(){
            return this.$store.getters.user
        },
    },
    methods: {
        photoUpload(file){
            const reader=new FileReader();
            if (file){
                reader.readAsDataURL(file);
                reader.onload=(e)=>{
                    let result=(e.target.result).split(",")
                   console.log(result)

                    const timestamp=new Date().getTime();
                    const fileRef = storageRef(storage,"Product_Images/"+this.user.data.uid+"/"+timestamp)

                    console.log(fileRef)

                    uploadString(fileRef, e.target.result, 'data_url').then((snapshot) => {
                        console.log(snapshot);
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
            console.log(e);
        },
    },
}
</script>

<style scoped>

</style>
