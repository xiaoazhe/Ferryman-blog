module.exports = {
  server: {
    port: 9527,
    host: '121.5.129.126',
    timing: false
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '摆渡人社区博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '程序员时常要学习很多新技术，新工具，而这些技术往往是需要大量实践才能够掌握的。将学习到的新知识通过编写教程的方式分享给其他人的这个过程，本身就是对新知识回顾的过程，有助于对知识点的进一步消化吸收。如果能够通过一篇文章教会别人一个新的知识，那么自己对这个知识的掌握也将更上一个台阶。所谓“最好的检验学习的方法就是把它教给别人”就是这个道理。' },
      { name: 'keywords', content: '程序员, Java技术, 摆渡人'},
      { name: 'baidu-site-verification', content: 'code-raKLuinDkh'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  axios: {
    baseURL: 'https://api.github.com',
    proxyHeaders: false,
    credentials: false
  },
  plugins: [
    { src:'~plugins/element-ui.js' ,ssr: false},
    { src:'~plugins/vue-infinite-scroll.js' ,ssr: false},
    { src: '~plugins/nuxt-quill-plugin.js', ssr: false }
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  proxy: {
    '/api': {
      target: 'http://121.5.129.126:8010', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
      }
    }
  },
  target: 'static',
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
