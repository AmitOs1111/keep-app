import { Route, Routes } from 'react-router-dom'
import routes from './routes.js'

import { AppFooter } from './cmp/app-footer.jsx'
import { UserMsg } from './cmp/user-msg'

export default function App() {
  return (
    <div className="App ">
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
