<template>
  <v-app>
    <Navbar />
    <v-content dark class="px-4 pb-4 grey darken-4">
      <transition name="router-anim">
      <router-view> </router-view>
      </transition>
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

.router-anim-enter-active {
  animation: coming .5s;
  animation-delay: .3s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going .3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

body::-webkit-scrollbar {
  width: 1rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: var(--primary);
}

</style>
