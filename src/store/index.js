import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  week: '第一周',
  questionNum: 1,
  questionDetail: {
    'answer_id': 1,
    'answer_content': '答案一'
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
