// https://nuxt.com/docs/api/configuration/nuxt-config
const cinefeelTheme = {
  dark: true,
  colors: {
    background: "#303030",
    primary: "#4CAF50",
  },
};

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {
      theme: {
        defaultTheme: "cinefeelTheme",
        themes: {
          cinefeelTheme,
        },
      },
      // utilisation des icônes de vuetify
      icons: {
        defaultSet: "mdi",
        sets: ["mdi", "fa"],
      },
    },
  },
});
