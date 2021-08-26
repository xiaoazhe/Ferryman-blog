import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor/dist/ssr'
import Player from 'zw-player'
import APlayer from '@moefe/vue-aplayer'

Vue.use(APlayer, {
  defaultCover: '',
  productionTip: true
})
Vue.use(Player)
Vue.use(VueQuillEditor)
