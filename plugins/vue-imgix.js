import { defineNuxtPlugin } from '#app';
import VueImgix from 'vue-imgix';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueImgix, {
    domain: 'images.unsplash.com',
    defaultIxParams: {
      auto: 'format,compress',
    },
  });
});
