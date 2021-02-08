import Vue from 'vue'
import VueRouter from 'vue-router'
import Modal from '../views/Modals/Modal.vue'
import Logged from '../views/Logged/Logged.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Modal',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/Logged',
    name: 'Logged',
    component: Logged
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
