import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Brejk - Nápověda",
  description: "Nápověda online fotbalového manažeru Brejk",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Nápověda', link: '/' },
      { text: 'FAQ', link: '/faq.md' },
      { text: 'Rady nováčkům', link: '/radynovackum.md'}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DlbSt/BrejkNapoveda' }
    ],

    search: {
      provider: 'local'
    }
  }
})
