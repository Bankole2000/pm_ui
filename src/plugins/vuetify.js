import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#f96a1f',
        secondary: '#498AFB',
        success: '#09C372',
        info: '#6ca0fc',
        warning: '#ffdd57',
        accent: '#9166cc',
        error: '#ff3860',
      },
      dark: {
        primary: '#f96a1f',
        secondary: '#498AFB',
        success: '#09C372',
        info: '#6ca0fc',
        warning: '#ffdd57',
        accent: '#9166cc',
        error: '#ff3860',
      },
    },
  },
});
