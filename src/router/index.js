import Vue from 'vue'
import VueRouter from 'vue-router'
import Modal from '../views/Modals/Modal.vue'
import Notte from '../views/Notes/Notte.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Modal',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/Notte',
    name: 'Notte',
    component: Notte
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
