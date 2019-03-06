import Vue from 'vue'
import Vuetify, { VApp, VCard, VContent, VFlex, VLayout } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VContent,
    VFlex,
    VLayout
  },
  iconfont: 'md',
})
