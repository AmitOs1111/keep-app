import { HomePage } from './pages/home-page.jsx'
import { Explore } from './pages/explore.jsx'
import { StayDetails } from './pages/stay-details.jsx'
import { Reservation } from './pages/reservation.jsx'
import { FullGallery } from './pages/full-gallery.jsx'
// import { AboutUs } from './pages/about-us.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
// import { AdminApp } from './pages/admin-app.jsx'
// import { StayEdit } from './pages/stay-edit.jsx'
// import { UserDetails } from './pages/user-details.jsx'
import { LogInApp } from './pages/login.jsx'
import { SignUpApp } from './pages/signup.jsx'
import { DashBoard } from './pages/dashboard.jsx'
import { BecomeHost } from './pages/become-host.jsx'

const routes = [
  {
    path: 'home/stay/:id',
    component: <StayDetails />,
    label: 'Details',
  },
  {
    path: '/home/Reservation/:id',
    component: <Reservation />,
    label: 'Reservation',
  },
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
    path: 'home/explore',
    component: <Explore />,
    label: 'Explore',
  },
  {
    path: 'home/explore/:type',
    component: <Explore />,
    label: 'Explore',
  },
  {
    path: 'gallery/:id',
    component: <FullGallery />,
    label: 'FullGallery',
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
  {
    path: 'dashboard',
    component: <DashBoard />,
    label: 'dashboard',
  },
  {
    path: 'become-host',
    component: <BecomeHost />,
    label: 'become-host',
  },
]

export default routes
