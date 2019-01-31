import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreateTournament from '@/components/CreateTournament'
import Tournaments from '@/components/Tournaments'
import singleT from '@/components/singleT'
import register from '@/components/register'
import activate from '@/components/activate'

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
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/activate/:hash',
      name: 'activate',
      component: activate
    }
  ]
})
