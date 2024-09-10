import { Route, Routes } from 'react-router-dom'
import routes from './routes.js'

import { AppHeader } from '../cmp/app-header.jsx'
import { AppFooter } from './cmp/app-footer.jsx'
import { UserMsg } from '../../keep-app/src/cmp/user-msg.jsx'

export default function App() {
  return (
    <div className="App ">
      <AppHeader />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={true}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
      <UserMsg />
      <AppFooter />
    </div>
  )
}
