import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../components/Top'
import Posts from '../components/Posts'
import PostDetail from '../components/PostDetail'
import Works from '../components/Works'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:"Top",
    component: Top
  },
  {
    path: '/posts',
    name:"blog-home",
    component: Posts
  },
  {
    path: '/posts/:id',
    name:'blog-post',
    component: PostDetail
  },
  {
    path: '/works',
    name: "Works",
    component:Works
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
