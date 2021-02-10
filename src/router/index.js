import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Users from '../views/Users'
import NotifyPage from '../views/NotifyPage'
import SearchPage from '../components/Search'



  Vue.use(VueRouter)

const routes = [

  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users,

  },
  {
    path: '/NotifyPage',
    name: 'NotifyPage',
    component: NotifyPage,

  },
  {
    path: '/SearchPage',
    name: 'SearchPage',
    component: SearchPage,

  },
//
//
//
//
//
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
