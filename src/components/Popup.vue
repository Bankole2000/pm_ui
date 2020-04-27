<template>
  <v-dialog max-width="600px" persistent v-model="dialog" dark>
      <template v-slot:activator="{ on }">
        <v-btn color="success mr-3" dark v-on="on">
          <v-icon left>mdi-plus-circle
          </v-icon>
          Add New Project
        </v-btn>
      </template>

      <v-card class="grey darken-4">
        <v-card-title class="headline grey darken-3 warning--text">
          Add A New Project
          <v-spacer></v-spacer>

               <v-btn
                  icon class="grey darken-1" text
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="addProject">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  >
                  <v-text-field
                    label="Project Title"
                    color="secondary"
                    autofocus
                    prepend-inner-icon="mdi-folder"
                    v-model="title">
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6">
                  <v-text-field
                    label="Project Owner"
                    prepend-inner-icon="mdi-account"
                    color="secondary"
                    v-model="person">
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12">
                  <v-textarea
                    label="Project Details"
                    color="secondary"
                    prepend-inner-icon="mdi-pencil"
                    dense
                    rows="2"
                    v-model="desc">

                  </v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12">

      <v-dialog
        ref="dialog"
        v-model="dateModal"
        persistent
        width="290px"
        >
        <template v-slot:activator="{ on }">
          <v-text-field
            :value="due | moment('Do MMM YYYY')"
            label="Due Date"
            prepend-icon="mdi-calendar-month"
            readonly
            v-on="on"
            @click="dateModal = true"
            @keypress="dateModal = true"
          ></v-text-field>
        </template>
        <v-date-picker v-model="due" scrollable
        >
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dateModal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(due)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex" cols="12">
        <v-select
          :items="statuses"
          filled
          label="Project Status"
          v-model="status"
          color="secondary"
          prepend-inner-icon="mdi-marker-check"
        ></v-select>
      </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="grey darken-3">
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="addProject"
            :loading="loading">
            <v-icon left>mdi-plus-circle</v-icon> Add Project
          </v-btn>
          <v-btn color="error" text @click="dialog = false">
            <v-icon left>mdi-close-circle</v-icon> Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
      <Loader :loading='loading'/>
  </v-dialog>
</template>

<script>

import Loader from '@/components/Loader.vue';

export default {
  name: 'Popup',
  data() {
    return {
      dialog: false,
      title: null,
      due: new Date().toISOString().substr(0, 10),
      person: null,
      desc: null,
      status: null,
      statuses: ['ongoing', 'overdue', 'completed'],
      loading: false,
      dateModal: false,
    };
  },
  components: {
    Loader,
  },
  methods: {
    addProject() {
      const newProject = {
        title: this.title,
        due: this.due,
        desc: this.desc,
        status: this.status,
      };
      this.loading = true;
      this.$emit('addProject', newProject);
      setTimeout(() => {
        this.loading = false;
        this.dialog = false;
      }, 300);
      this.newProject = {
        title: null,
        due: new Date().toISOString().substr(0, 10),
        person: null,
        desc: null,
      };
    },
  },
  computed: {

  },
};
</script>

<style></style>
