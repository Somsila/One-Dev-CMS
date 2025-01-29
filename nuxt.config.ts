import { defineNuxtConfig } from "nuxt/config";
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss", "@nuxt/icon", '@nuxt/content'],
  css: ["~/assets/css/main.css", "animate.css/animate.min.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "light",
          cssLayer: false,
        },
      },
    },
  },
  app: {
    head: {
      titleTemplate: "%s - One.Dev",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "My amazing website",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  devServer: {
    host:'0.0.0.0',
    port:4001,
  },

  compatibilityDate: "2024-12-26",
});
