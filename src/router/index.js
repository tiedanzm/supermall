import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'



const Home = () =>import('../views/Home/Home.vue')
const Car = () =>import('../views/Car/Car.vue')
const About= () =>import('../views/About/About.vue')
const Me= () =>import('../views/Me/Me.vue')
const Detail= () =>import('../views/detail/Detail.vue')
Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'Home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/car',
    component: Car
  },
  {
    path:'/me',
    component: Me
  },
  {
    path:'/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
