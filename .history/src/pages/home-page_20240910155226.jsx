import { useEffect, useState } from 'react'

import { AppLoader } from './app-loader.jsx'
import { AppHeader } from '../cmp/app-header.jsx'
import { AppFooter } from '../cmp/app-footer.jsx'

export function HomePage() {
  // if (!iconsStays) return <AppLoader />
  return <section className="home-page main-layout"></section>
}
