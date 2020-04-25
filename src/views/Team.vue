<template>
  <div class="team">
    <h1 class="display-2 grey--text text--lighten-1 mt-4 ml-4 font-weight-thin">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(t, i) in team" :key="i">
          <v-card class="ma-3 pa-2">
            <v-responsive class="text-center pt-4">
              <v-avatar size="120">
                <v-img :src="(t.avatar)"></v-img>
                </v-avatar>

            </v-responsive>
            <v-card-text class="text-center">

              <div class="subheading">{{ t.name }}</div>
              <div class="font-weight-bold">{{ t.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Web Wizard', role: 'Web Developer', avatar: '/avatars/vincent.jpg' },
        { name: 'Cloud Strife', role: 'Field Executive Team', avatar: '/avatars/cloud.jpg' },
        { name: 'Tifa LockHart', role: 'Human Resources', avatar: '/avatars/tifa.jpg' },
        { name: 'Chunli', role: 'International Marketing', avatar: '/avatars/chunli.jpg' },
        { name: 'Link Lombardi', role: 'Department of Sass', avatar: '/avatars/link.jpg' },
      ],
    };
  },
};
</script>

<style>

</style>
