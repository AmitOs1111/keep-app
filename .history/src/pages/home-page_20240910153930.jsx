import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { FilterCarousel } from '../cmp/filter-carousel.jsx'
import { StayList } from '../cmp/stay-list.jsx'
import { AppLoader } from './app-loader.jsx'
import { AppHeader } from '../cmp/app-header.jsx'

import { loadIconsStays } from '../store/stay.action.js'

export function HomePage() {
  const [iconsStays, setIconsStays] = useState()
  // const { iconsStays } = useSelector((state) => state.stayModule)

  useEffect(() => {
    setIconsStays(loadIconsStays())
  }, [])

  if (!iconsStays) return <AppLoader />
  return (
    <section className="home-page main-layout">
      <header className="full">
        <AppHeader />
      </header>
      <main>
        <FilterCarousel />
        <div className="dream-stay">
          <StayList stays={iconsStays} />
        </div>

        <div className="past-experiences">
          <h2>Past experiences</h2>
          <StayList stays={iconsStays} />
        </div>
      </main>
    </section>
  )
}
