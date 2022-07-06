import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Story from '../views/Story.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'root',
    redirect: '/story'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/story',
    name: 'story',
    component: Story

  },
  {
    path: '/story/new',
    name: 'new-story',
    component: () => import('../views/NewStory.vue')
  },
  {
    path: '/config',
    name: 'rasa-config',
    component: () => import('../views/RasaConfig.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
