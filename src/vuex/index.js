import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    daily:0
  },
  mutations:{
    getDaily(state,msg){
      state.daily = msg
      console.log(state.daily)
    },
  }
})

export default store
