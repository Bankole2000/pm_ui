<template>
  <div class="dashboard page">

    <h1 class="display-2 grey--text text--lighten-1 mt-4 ml-4 font-weight-thin">Dashboard</h1>

    <v-container class="my-5">
      <v-layout class="mb-3">

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn @click="sortBy('title')" small text color="grey" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Project Name</span>
            </v-btn>
          </template>
          <span>Order By Project Title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn @click="sortBy('person')" small text color="grey" v-on="on">
             <v-icon left small>mdi-account</v-icon>
             <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Order By Person</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn @click="sortBy('status')" v-on="on" small text color="grey">
              <v-icon left small>mdi-marker-check</v-icon>
              <span class="caption text-lowercase">By Status</span>
            </v-btn>
          </template>
          <span>Order by Status</span>
        </v-tooltip>

      </v-layout>
      <v-card dark hover tile class="grey darken-3 px-3 ma-2"
      v-for="(p, i) in projects" :key="i">
        <v-layout row wrap :class="`pa-4 project ${p.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text text--lighten-2">Project Title</div>
            <div class="secondary--text text--lighten-1">{{ p.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text text--lighten-2">Person</div>
            <div>{{ p.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text text--lighten-2">Due by</div>
            <div>{{ p.due }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="d-flex justify-lg-center justify-md-start">

              <v-chip :class="`${p.status} my-2`">{{ p.status }}</v-chip>

          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>


    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/firebase/init';

export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {
      projects: [
        {
          title: 'Create a new website',
          person: 'Super Dev 1',
          due: '1st Jan 2020',
          status: 'ongoing',
        },
        {
          title: 'Code up the Homepate',
          person: 'Chin Chong 1',
          due: '10th Jan 2020',
          status: 'ongoing',
        },
        {
          title: 'Design Video Thumbnails',
          person: 'Ryu the Dev',
          due: '20th Feb 2020',
          status: 'completed',
        },
        {
          title: 'Create a community Forum',
          person: 'Programmer Gouken',
          due: '1st March 2020',
          status: 'overdue',
        },
      ],
      orderReverse: false,
    };
  },
  methods: {
    sortBy(prop) {
      if (this.orderReverse) {
        this.orderReverse = !this.orderReverse;
        return this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
      }
      this.orderReverse = !this.orderReverse;
      return this.projects.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
    },
  },
  created() {
    db.collection('projects').onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>
<style>
  .project.completed{
    border-left: 4px solid var(--success);
  }
  .project.ongoing{
    border-left: 4px solid var(--primary);
  }
  .project.overdue{
    border-left: 4px solid var(--error);
  }
  .v-chip.completed{
    background-color: var(--success) !important;
  }
  .v-chip.ongoing{
    background-color: var(--primary) !important;
  }
  .v-chip.overdue{
    background-color: var(--error) !important;
  }

</style>
