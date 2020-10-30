import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import comments from './modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { auth, comments },
})
