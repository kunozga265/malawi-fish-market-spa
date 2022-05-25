<template>
    <v-app-bar
        dark
        color="blue darken-3"
        fixed
    >

        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="d-none d-sm-flex">Malawi Fish Market</v-toolbar-title>
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
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    name: "Toolbar"
}
</script>

<style scoped>

</style>
