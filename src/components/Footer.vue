<template>
  <div class="footer">
    <v-footer
    dark
    padless
  >
    <v-card

      tile
      class="dark darken-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(icon,i) in icons"
          :key="i"
          class="mx-4 white--text"
          icon
          text
        >
        <a :href="(icon.link)" target="_blank" class="secondary--text">
          <v-icon size="24px">{{ icon.i }}</v-icon></a>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 px-12">
        <span class="primary--text">Project Manager</span> is a simple Project Management UI built
        with <span class="primary--text"><i class="mdi mdi-vuejs"></i> VueJS</span> and
        <span class="primary--text"><i class="mdi mdi-vuetify"></i> Vuetify</span> for practice
        and demonstration purposes.
        <span class="primary--text font-weight-bold">The Developer</span> is currently
        available for projects, collaborations, training and/or remote employment.
        Feel free to <a href="tel:+2348069166906">
          <span class="secondary--text"><i class="mdi mdi-phone-in-talk"></i> Call</span></a> or
          <a href="mailto:techybanky@gmail.com">
          <span class="secondary--text"><i class="mdi mdi-email"></i> Send an email</span></a>.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} —
        <a href="https://bankole2000.github.io/porfolio"><strong>Bankole Esan</strong></a>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      icons: [
        { i: 'mdi mdi-facebook', link: 'https://facebook.com/esan.bankole' },
        { i: 'mdi mdi-twitter', link: 'https://twitter.com/bankolealexesan' },
        { i: 'mdi mdi-linkedin', link: 'https://www.linkedin.com/in/bankoleesan' },
        { i: 'mdi mdi-discord', link: 'https://discord.gg/HeAVxtM' },
        { i: 'mdi mdi-github', link: 'https://github.com/bankole2000' },
      ],
    };
  },
};
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
