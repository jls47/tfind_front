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
	//modules: {
	//	login: loginModule,
	//	search: searchModule
	//}
	state: {
		searching: false,
		loggedIn: false
	},
	mutations: {
		SET_SEARCHING_STATUS(state, status){
			state.searchingStatus = status
		},
		SET_LOGIN_STATUS(state, status){
			state.loggedIn = status
		}
	},
	actions: {
		search(context){
			context.commit('SET_SEARCHING_STATUS', true)
		},
		unSearch(context){
			context.commit('SET_SEARCHING_STATUS', false)
		},
		login(context){
			context.commit('SET_LOGIN_STATUS', true)
		},
		logout(context){
			context.commit('SET_LOGIN_STATUS', false)
		}
	},
	getters: {
		searchStatus(state){
			return state.searchingStatus;
		},
		loginStatus(state){
			return state.loginStatus;
		}
	}
})

export default store;

export const serverBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
