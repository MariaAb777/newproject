import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Users from '../views/Users'
import NotifyPage from '../views/NotifyPage'
import SearchPage from '../components/Search'
import Login from '../views/Login'
import Register from '../views/Register'
import UserPage from '../views/UserPage'


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
  {
    path: '/Login',
    name: 'Login',
    component: Login,

  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,

  },
  {
    path: '/UserPage',
    name: 'UserPage',
    component: UserPage,

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
