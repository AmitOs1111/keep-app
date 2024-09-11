import { AppLogo } from '../cmp/header/app-logo.jsx'
import { SearchHeader } from '../cmp/header/search-header.jsx'

export function AppHeader() {
  return (
    <section className="app-header full flex align-center">
      <div className="flex align-center">
        <AppLogo />
        <div className="btn-menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <SearchHeader />
    </section>
  )
}
