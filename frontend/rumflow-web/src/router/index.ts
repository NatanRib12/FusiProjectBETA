import { createRouter, createWebHistory } from 'vue-router'
import Registration from '@/views/registration.vue'
import Home from '../views/home.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Calculate from '@/views/calculate.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/calculate',
        name: 'calculate',
        component: Calculate
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registration
    }

  ]
})

export default router