// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import * as vueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(Vuex)

Vue.use(vueGoogleMaps, {
	load: {
		key: "AIzaSyBqKv4liCN4Qb-ptZ0uU8qUQ0bNyDxoS9c",
		libraries: "places"
	}
});

//actions call mutations which update state
//getters grab data from state

const store = new Vuex.Store({
	//modules: {
	//	login: loginModule,
	//	search: searchModule
	//}
	state: {
		status: "search",
		loggedIn: false
	},
	mutations: {
		SET_USE_CONTEXT(state, context){
			state.status = context
		},
		SET_LOGIN_STATUS(state, status){
			state.loggedIn = status
		},

	},
	actions: {
		search(context){
			context.commit('SET_USE_CONTEXT', 'search')
		},
		createAccount(context){
			context.commit('SET_USE_CONTEXT', 'createAccount')
		},
		createTournament(context){
			context.commit('SET_USE_CONTEXT', 'createTournament')
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
			return state.status;
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
