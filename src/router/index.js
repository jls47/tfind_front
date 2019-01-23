import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreateTournament from '@/components/CreateTournament'
import Tournaments from '@/components/Tournaments'
import singleT from '@/components/singleT'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tournaments',
      name: 'Tournaments',
      component: Tournaments
    },
    {
      path: '/createt',
      name: 'createTournament',
      component: CreateTournament
    },
    {
      path: '/singlet/:id',
      name: 'singleT',
      component: singleT
    }
  ]
})
