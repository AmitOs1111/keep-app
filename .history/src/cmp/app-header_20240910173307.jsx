import { AppLogo } from '../cmp/header/app-logo.jsx'

export function AppHeader() {
  return (
    <section className="app-header">
      <div className="flex align-center">
        <AppLogo />
        <div className="btn-menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </section>
  )
}
