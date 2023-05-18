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

// Enable page tracking
router.afterEach((to) => {
  // Sends a page view hit to Google Analytics for each route change
  router.app.$ga.trackView(to.name)
})

export default router
