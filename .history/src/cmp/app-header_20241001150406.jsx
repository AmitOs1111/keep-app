import { AppLogo } from '../cmp/header/app-logo.jsx'
import { SearchHeader } from '../cmp/header/search-header.jsx'
import { LanguageSwitcher } from '../cmp/header/language-switcher.jsx'

export function AppHeader() {
  return (
    <section className="app-header ">
      <div className="flex align-center">
        <div className="container-logo flex align-center">
          <AppLogo />
          <div className="btn-menu flex align-center justify-center">
            <i className="fa-solid fa-bars"></i>
          </div>
          <LanguageSwitcher />
        </div>
        <div className="container-search">
          <SearchHeader />
        </div>
      </div>
    </section>
  )
}
