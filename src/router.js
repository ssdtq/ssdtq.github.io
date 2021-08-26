import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import List from './components/List.vue'
import Login from './components/Login.vue'
import Blog from './components/Blog.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/login',
      component: Login
    }, 
    {
      path: '/bLog/:id',
      component: Blog
    }
  ]
})

// 设置导航守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if ( token || to.path === '/login') {
    next()
  }else {
    next('/login')
  }
})


export default router