import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutUs from '../views/About/AboutUs'
import Logged from '../views/Logged/Logged'
import PagePhotos from '../views/Logged/LoggedMenu/PagePhotos'
import AccountMessages from '../views/Logged/LoggedMenu/AccountMessages'
import AboutYou from '../views/Logged/LoggedMenu/AboutYou'


  Vue.use(VueRouter)

const routes = [

  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/Logged',
    name: 'Logged',
    component: Logged,

  },

        {
          path: '/PagePhotos',
          name: 'PagePhotos',
          component: PagePhotos,
        },
        {
          path: '/AccountMessages',
          name: 'AccountMessages',
          component: AccountMessages,
        },{
          path: '/AboutYou',
          name: 'AboutYou',
          component: AboutYou,


  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
