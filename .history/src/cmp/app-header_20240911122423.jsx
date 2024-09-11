import { AppLogo } from '../cmp/header/app-logo.jsx'
import { SearchHeader } from '../cmp/header/search-header.jsx'

export function AppHeader() {
  return (
    <section className="app-header full main-layout ">
      <div className="flex align-center">
        <div className="container-logo flex align-center">
          <AppLogo />
          <div className="btn-menu flex align-center justify-center">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="container-search">
          <SearchHeader />
        </div>
      </div>
    </section>
  )
}
