import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor/dist/ssr'
import Player from 'zw-player'
import APlayer from '@moefe/vue-aplayer'

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true
})
Vue.use(Player)
Vue.use(VueQuillEditor)
