<template>
  <div class="navbar">
    <v-app-bar dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"
      class="grey--text text--lighten-3"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text text--lighten-3">
        <span class="font-weight-thin">Project</span>
        <span class="primary--text font-regular">Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="grey lighten-3" text>
        <span>Sign out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer temporary  v-model="drawer" dark app class="grey darken-4">
      <!-- <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading">Jonathan Lee</div>
            <div class="body-1">heyfromjonathan@gmail.com</div>
          </v-col>
        </v-row>
      </v-img> -->

      <v-list>
        <v-list>
            <v-list-item class="d-flex justify-center mt-3">
              <v-list-item-avatar size="120">
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">Sandra Adams</v-list-item-title>
                <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

        <v-list-item link v-for="(link, index) in links" :key="index" router :to="link.route"
         >
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account-multiple-outline', text: 'Team', route: '/team' },
        { icon: 'mdi-information-outline', text: 'About', route: '/about' },
      ],
    };
  },
};
</script>

<style>

</style>
