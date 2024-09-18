import { HomePage } from './pages/home-page.jsx'
// import { AboutUs } from './pages/about-us.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
import { LogInApp } from './pages/login.jsx'
import { SignUpApp } from './pages/signup.jsx'
import { EditContentNote } from './pages/edit-content-note.jsx'
import { TrashNote } from './pages/trash-note.jsx'
import { ArchiveNote } from './pages/archive-note.jsx'
import { ListByLabel } from './pages/list-by-label.jsx'
import { MainSearch } from './pages/main-search.jsx'

const routes = [
  {
    path: 'search',
    component: <MainSearch />,
    label: 'Search ',
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
    path: 'note/:id',
    component: <EditContentNote />,
    label: 'edit content note',
  },
  {
    path: 'trash',
    component: <TrashNote />,
    label: 'trash',
  },
  {
    path: 'archive',
    component: <ArchiveNote />,
    label: 'archive',
  },
  {
    path: 'label/:label',
    component: <ListByLabel />,
    label: 'label',
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
