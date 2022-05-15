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
                                >
                                    Next
                                </v-btn>

                            </v-stepper-content>

                            <v-stepper-content step="2">
                                <v-card
                                    class="mb-12"
                                    color="grey lighten-1"
                                    height="200px"
                                ></v-card>

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
                                ></v-card>

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
import {database} from "@/app";
import {onValue, ref} from "firebase/database";

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
        }
    },

    created() {

    },
}
</script>

<style scoped>

</style>
