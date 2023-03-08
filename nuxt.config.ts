// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // CSS file in the project
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/main.scss'
  ],
  app: {
    head: {
      script: [
        { src: 'https://kit.fontawesome.com/23761b7654.js', crossorigin: 'anonymous' }
      ],
      title: 'Portfolio TobogganDev',
    }
  }
})
