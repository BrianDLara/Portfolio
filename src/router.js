import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import Projects from './pages/UserProjects'
import ContactMe from './pages/ContactMe'
const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/projects', component: Projects, name: 'Projects' },
  { path: '/contact', component: ContactMe, name: 'ContactMe' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
