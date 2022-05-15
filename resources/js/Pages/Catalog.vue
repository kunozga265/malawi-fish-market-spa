<style lang="scss">

</style>

<template>
    <div class="d-flex justify-center">
            <v-card
                flat
                width="600"
                class="pa-5"
            >
                <v-row
                    class=""
                >
                    <v-col
                        v-for="(catalog,index) in catalogs"
                        :key="index"
                        cols="12"
                    >
                        <v-card
                            flat
                            class=""
                        >
                            <div class="d-flex flex-no-wrap justify-space-between py-5">
<!--                                <v-avatar
                                    class="ma-3"
                                    size="128"
                                    tile
                                >

                                </v-avatar>-->

                                <div>
                                    <div
                                        class="text-h5 text--primary"
                                        v-text="catalog.species"
                                    ></div>

                                   <div>
                                       <div class="d-flex justify-start align-center">
                                           <div><v-icon color="blue darken-3">mdi-currency-usd</v-icon></div>
                                           <div class="ml-2 ">K{{catalog.price}}/{{catalog.unit}}</div>
                                       </div>
                                       <div class="d-flex justify-start align-center">
                                           <div><v-icon color="blue darken-3">mdi-weight</v-icon></div>
                                           <div class="ml-2 ">{{catalog.amount}} {{catalog.unit}}</div>
                                       </div>
                                       <div class="d-flex justify-start align-center">
                                           <div><v-icon color="blue darken-3">mdi-map-marker</v-icon></div>
                                           <div class="ml-2 ">{{catalog.market}}, {{catalog.district}}</div>
                                       </div>
                                       <div class="d-flex justify-start align-center">
                                           <div><v-icon color="blue darken-3">mdi-calendar</v-icon></div>
                                           <div class="ml-2 ">{{catalog.date}}</div>
                                       </div>
<!--                                       <v-list-item>
                                           <v-list-item-action>
                                               <v-icon>mdi-currency-usd</v-icon>
                                           </v-list-item-action>
                                           <v-list-item-content>
                                               <v-list-item-title>K{{catalog.price}}/{{catalog.unit}}</v-list-item-title>
                                           </v-list-item-content>
                                       </v-list-item>

                                       <v-list-item>
                                           <v-list-item-action>
                                               <v-icon>mdi-weight</v-icon>
                                           </v-list-item-action>
                                           <v-list-item-content>
                                               <v-list-item-title>{{catalog.amount}} {{catalog.unit}} </v-list-item-title>
                                           </v-list-item-content>
                                       </v-list-item>

                                       <v-list-item>
                                           <v-list-item-action>
                                               <v-icon>mdi-map-marker</v-icon>
                                           </v-list-item-action>
                                           <v-list-item-content>
                                               <v-list-item-title>{{catalog.market}}, {{catalog.district}} </v-list-item-title>
                                           </v-list-item-content>
                                       </v-list-item>

                                       <v-list-item>
                                           <v-list-item-action>
                                               <v-icon>mdi-calendar</v-icon>
                                           </v-list-item-action>
                                           <v-list-item-content>
                                               <v-list-item-title>{{catalog.date}}</v-list-item-title>
                                           </v-list-item-content>
                                       </v-list-item>-->
                                   </div>
                                </div>
                                <v-img max-width="180" :src="catalog.image1"></v-img>

                            </div>

                            <div>
                                <v-select
                                    v-model="catalog.status"
                                    :items="items"
                                    outlined
                                    color="blue darken-3"
                                ></v-select>
                            </div>
                            <v-divider></v-divider>
<!--                            <v-img
                                class="white&#45;&#45;text align-end"
                                height="200px"
                                :src="catalog.image1"
                            >
                                <v-card-title>{{catalog.species}}</v-card-title>
                            </v-img>


                            <v-card-text class="text&#45;&#45;primary">
                               <v-row>
                                  <v-col sm="6" >
                                      <div class="d-flex justify-start align-center">
                                          <div><v-icon>mdi-currency-usd</v-icon></div>
                                          <div>K{{catalog.price}}/{{catalog.unit}}</div>
                                      </div>

                                  </v-col>
                                   <v-col sm="6" >
                                       <div class="d-flex justify-start align-center">
                                       <div><v-icon>mdi-weight</v-icon></div>
                                       <div>{{catalog.amount}} {{catalog.unit}}</div>
                                       </div>
                                  </v-col>
                                   <v-col sm="6" >
                                       <div class="d-flex justify-start align-center">
                                       <div><v-icon>mdi-map-marker</v-icon></div>
                                       <div>{{catalog.market}}, {{catalog.district}}</div>
                                       </div>
                                  </v-col>
                                   <v-col sm="6" >
                                       <div class="d-flex justify-start align-center">
                                       <div><v-icon>mdi-calendar</v-icon></div>
                                       <div>{{catalog.date}}</div>
                                       </div>
                                  </v-col>

&lt;!&ndash;                                  <v-col sm="6">
                                      <v-list-item>
                                       <v-list-item-action>
                                           <v-icon>mdi-weight</v-icon>
                                       </v-list-item-action>
                                       <v-list-item-content>
                                           <v-list-item-title>{{catalog.amount}} {{catalog.unit}} </v-list-item-title>
                                       </v-list-item-content>
                                   </v-list-item>
                                  </v-col>

                                  <v-col sm="6">
                                      <v-list-item>
                                       <v-list-item-action>
                                           <v-icon>mdi-map-marker</v-icon>
                                       </v-list-item-action>
                                       <v-list-item-content>
                                           <v-list-item-title>{{catalog.market}}, {{catalog.district}} </v-list-item-title>
                                       </v-list-item-content>
                                   </v-list-item>
                                  </v-col>

                                  <v-col sm="6">
                                      <v-list-item>
                                       <v-list-item-action>
                                           <v-icon>mdi-calendar</v-icon>
                                       </v-list-item-action>
                                       <v-list-item-content>
                                           <v-list-item-title>{{catalog.date}}</v-list-item-title>
                                       </v-list-item-content>
                                   </v-list-item>
                                  </v-col>&ndash;&gt;
                               </v-row>
                            </v-card-text>-->
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
    </div>
</template>

<script>


import {database} from "@/app";
import {onValue, ref} from "firebase/database";

export default {
    name: "Home",
    props:['uid'],

    components:{

    },

    data() {
        return {
            catalogs: [],
            items:['Available','Finished'],
        }
    },

    created() {
        const catalogRef = ref(database, 'Traders/' + this.uid + '/Catalog');
        onValue(catalogRef, (snapshot) => {
            this.catalogs=snapshot.val()
        });
    },

}
</script>

<style scoped>

</style>
