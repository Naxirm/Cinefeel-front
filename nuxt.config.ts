// https://nuxt.com/docs/api/configuration/nuxt-config
const cinefeelTheme = {
  dark: true,
  colors: {
    background: "#303030",
    primary: "#009688",
  },
};

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", "@vueuse/nuxt", "@pinia/nuxt"],
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
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      accessToken: process.env.ACCESS_TOKEN,
      images: process.env.IMAGES,
    }
  },
});