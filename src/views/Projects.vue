<template>
  <div class="projects page">
    <h1 class="display-2 grey--text text--lighten-1 mt-4 ml-4 font-weight-thin">My Projects</h1>


    <v-container class="my-5">
      <v-layout for class="mb-3">

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
            <v-btn @click="sortBy('status')" v-on="on" small text color="grey">
              <v-icon left small>mdi-marker-check</v-icon>
              <span class="caption text-lowercase">By Status</span>
            </v-btn>
          </template>
          <span>Order by Status</span>
        </v-tooltip>

      </v-layout>
      <v-expansion-panels>
      <v-expansion-panel v-for="(p, i) in projects" :key="i">
        <v-expansion-panel-header tile v-slot:default="{ open }"
        :class="`project ${p.status} d-flex justify-space-between align-items-center px-12`">
        <v-layout row wrap class="project">
          <v-flex xs6 sm6 md6 class="align-self-center">
            <span>{{ p.title }}</span>
          </v-flex>
          <v-flex xs12 sm6 md4 class="align-self-center d-none d-md-flex">
             <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Hide Project Details
                </span>
                <span
                  v-else
                  key="1"
                >
                  View Details
                </span>
          </v-fade-transition>
          </v-flex>
          <v-flex xs6 sm6 md2>
            <div class="d-flex justify-center">
              <v-chip :class="`${p.status} white--text`">{{ p.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>

        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>
              <div class="font-weight-bold">Due by {{ p.due }}</div>
              <div>
                {{ p.desc }}
              </div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>
      <v-layout row class="hidden-md-and-up mt-3">
        <v-flex xs12 class="d-flex justify-center">
          <Popup @addProject='addProject' />
        </v-flex>

      </v-layout>

    </v-container>
  </div>
</template>

<script>
import Popup from '@/components/Popup.vue';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Create a new website',
          person: 'Super Dev 1',
          due: '1st Jan 2020',
          status: 'ongoing',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem molestias tenetur accusamus nihil facilis doloremque explicabo nesciunt',
        },
        {
          title: 'Code up the Homepate',
          person: 'Chin Chong 1',
          due: '10th Jan 2020',
          status: 'ongoing',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem molestias tenetur accusamus nihil facilis doloremque explicabo nesciunt',
        },
        {
          title: 'Design Video Thumbnails',
          person: 'Ryu the Dev',
          due: '20th Feb 2020',
          status: 'completed',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem molestias tenetur accusamus nihil facilis doloremque explicabo nesciunt',
        },
        {
          title: 'Create a community Forum',
          person: 'Programmer Gouken',
          due: '1st March 2020',
          status: 'overdue',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem molestias tenetur accusamus nihil facilis doloremque explicabo nesciunt',
        },
      ],
      orderReverse: false,
    };
  },
  components: {
    Popup,
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
    addProject(newProject) {
      console.log(newProject);
      this.projects.push(newProject);
    },
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => project.person === 'Super Dev 1');
    },
  },
};
</script>

<style></style>
