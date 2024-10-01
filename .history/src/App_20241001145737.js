import { Route, Routes } from 'react-router-dom'
import routes from './routes.js'

import { AppHeader } from '../src/cmp/app-header.jsx'
import { SideBar } from './cmp/side-bar.jsx'
import { UserMsg } from '../../keep-app/src/cmp/user-msg.jsx'
import { PrepareNote } from './cmp/note/prepare-note.jsx'

export default function App() {
  return (
    <div className="App ">
      <AppHeader />
      <main className="flex main-layout">
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
