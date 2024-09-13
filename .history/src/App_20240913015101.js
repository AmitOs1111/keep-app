import { Route, Routes } from 'react-router-dom'
import routes from './routes.js'

import { AppHeader } from '../src/cmp/app-header.jsx'
import { SideBar } from './cmp/side-bar.jsx'
import { UserMsg } from '../../keep-app/src/cmp/user-msg.jsx'

export default function App() {
  return (
    <div className="App main-layout">
      <AppHeader />
      <main className="flex">
        <SideBar />
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
    </div>
  )
}
