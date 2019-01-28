// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(Vuex)

//actions call mutations which update state
//getters grab data from state
const store = new Vuex.Store({
	state: {
		searchingStatus: 'notsearching'
	},
	mutations: {
		SET_SEARCHING_STATUS(state, status){
			state.searchingStatus = status
		}
	},
	actions: {
		search(context){
			context.commit('SET_SEARCHING_STATUS', 'searching')
		}
	},
	getters: {
		searchStatus(state){
			return state.searchingStatus;
		}
	}
})

export const serverBus = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
