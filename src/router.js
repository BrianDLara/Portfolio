import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import Projects from './pages/UserProjects'
import Resume from './pages/UserResume'
import ContactMe from './pages/ContactMe'
const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/about', component: AboutMe, name: 'AboutMe' },
  { path: '/projects', component: Projects, name: 'Projects' },
  { path: '/resume', component: Resume, name: 'Resume' },
  { path: '/contact', component: ContactMe, name: 'ContactMe' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
