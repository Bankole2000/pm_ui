<template>
  <v-app>
    <Navbar />
    <v-content dark class="px-4 pb-4 grey darken-4">
      <router-view> </router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
:root {
  --primary: #f96a1f;
  --secondary: #498AFB;
  --accent: #9166cc;
  --warning: #ffdd57;
  --success: #09C372;
  --info: #6ca0fc;
  --error: #ff3860;
}
</style>
