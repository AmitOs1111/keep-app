import { HomePage } from './pages/home-page.jsx'
// import { AboutUs } from './pages/about-us.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
import { LogInApp } from './pages/login.jsx'
import { SignUpApp } from './pages/signup.jsx'

const routes = [
  {
    path: '',
    component: <HomePage />,
    label: 'Home 🏠',
  },
  {
    path: 'home',
    component: <HomePage />,
    label: 'Home 🏠',
  },

  {
    path: 'login',
    component: <LogInApp />,
    label: 'log in',
  },
  {
    path: 'signup',
    component: <SignUpApp />,
    label: 'sign up',
  },
]

export default routes
