import Vue from 'vue'
import Vuex from  'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    message: '1'
  },
  mutations:{
    setmessage(state){
      state.message = '2'
    }
  },
  actions:{
    setmessage({commit}){
      commit('setmessage')
    }
  },
  getters:{}
})