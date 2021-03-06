import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Demo1 from '../views/Demo1.vue'
import Demo2 from '../views/Demo2.vue'
import Demo3 from '../views/Demo3.vue'
import Demo4 from '../views/Demo4.vue'
import Demo5 from '../views/Demo5.vue'
import Demo6 from '../views/Demo6.vue'
import Demo7 from '../views/Demo7.vue'
import Demo8 from '../views/Demo8.vue'
import Demo9 from '../views/Demo9.vue'
import Demo10 from '../views/Demo10.vue'
import Demo11 from '../views/Demo11.vue'
import Demo12 from '../views/Demo12.vue'
import Demo13 from '../views/Demo13.vue'
import Demo14 from '../views/Demo14.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: Demo1
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: Demo2
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: Demo3
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: Demo4
  },
  {
    path: '/demo5',
    name: 'Demo5',
    component: Demo5
  },
  {
    path: '/demo6',
    name: 'Demo6',
    component: Demo6
  },
  {
    path: '/demo7',
    name: 'Demo7',
    component: Demo7
  },
  {
    path: '/demo8',
    name: 'Demo8',
    component: Demo8
  },
  {
    path: '/demo9',
    name: 'Demo9',
    component: Demo9
  },
  {
    path: '/demo10',
    name: 'Demo10',
    component: Demo10
  },
  {
    path: '/demo11',
    name: 'Demo11',
    component: Demo11
  },
  {
    path: '/demo12',
    name: 'Demo12',
    component: Demo12
  },
  {
    path: '/demo13',
    name: 'Demo13',
    component: Demo13
  },
  {
    path: '/demo14',
    name: 'Demo14',
    component: Demo14
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: 'home',
  routes
})

export default router
