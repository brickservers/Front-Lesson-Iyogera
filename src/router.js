import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Incall from './views/Incall.vue'
import Lesson from './views/Lesson.vue'
//import Login from './views/Login.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,

    },
    {
      path: '/lessons',
      name: 'Lesson',
      component: Lesson,

    },
    {
      path: '/in-call/:id',
      name: 'InCall',
      props: true,
      component: Incall,

    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition){
      return { x: 0, y: 0}
    }
  })
export default router

