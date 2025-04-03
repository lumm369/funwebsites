import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "funwebsites",
  description: "A VitePress Site",
  outDir: "docs/.vitepress/dist",
  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lumm369/funwebsites' }
    ]
  }
})
