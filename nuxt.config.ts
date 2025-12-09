// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: ["primary", "error", "warning", "success", "info", "neutral"],
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  app: {
    baseURL: "/NewZealand/", // ← 你的 repo 名稱
    buildAssetsDir: "/static/",
    head: {
      title: 'NewZealand旅遊網站', // 設置預設網頁標題
      link: [
        // 設置 Favicon，文件應放在 public/favicon.ico
        { rel: 'icon', type: 'image/x-icon', href: '/myLogo.png' } 
      ]
    }
  },
});
