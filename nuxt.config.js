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
    title: 'ferry-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
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
