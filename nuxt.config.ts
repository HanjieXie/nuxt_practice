// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 全局的样式可以通过import和nuxt.config.ts中导入
  css: [
    'assets/global.scss'
  ],
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@import "~/assets/_variables.scss";'
        }
      }
    }
  }
})

