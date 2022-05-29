<template>
    <v-app-bar
        dark
        color="blue darken-3"
        fixed
    >

<!--        <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
<!--        <v-toolbar-title class="d-none d-sm-flex">Malawi Fish Market</v-toolbar-title>-->
        <div class="app-logo">
            <v-avatar>
                <img src="/images/logos/fish_app_logo.png" alt="">
            </v-avatar>

        </div>
        <v-spacer></v-spacer>
        <!--            Smaller Screens-->
        <v-toolbar-items class="d-flex d-md-none">
            <v-btn icon text :to="{name:'dashboard'}">
                <v-icon>mdi-store</v-icon>
            </v-btn>
            <v-btn icon text :to="{name:'catalog'}">
                <v-icon>mdi-book-open</v-icon>
            </v-btn>
            <v-btn icon text :to="{name:'profile'}">
                <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn icon text @click="about=true">
                <v-icon>mdi-comment-question</v-icon>
            </v-btn>
        </v-toolbar-items>

        <!--            Bigger Screens-->
        <v-toolbar-items class="d-none d-md-flex">
            <v-btn text :to="{name:'dashboard'}">
                Market
            </v-btn>
            <v-btn text :to="{name:'catalog'}">
                Catalog
            </v-btn>
            <v-btn text :to="{name:'profile'}">
                Profile
            </v-btn>
            <v-btn text @click="about=true">
                About
            </v-btn>
        </v-toolbar-items>
        <v-dialog
            v-model="about"
            width="500"
        >
            <v-card>
                <v-card-title class="text-h5 grey lighten-5">
                    About Project
                </v-card-title>

                <v-card-text>
                    Developed and supported by LUANAR & MSU teams led by Prof Emmanuel Kaunda, Assistant Prof Abigail Bennet & Associate Prof Samson Katengeza
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="about = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-app-bar>
</template>

<script>
export default {
    name: "Toolbar",

    data() {
        return {
            about:false
        }
    }
}
</script>

<style scoped>

</style>
