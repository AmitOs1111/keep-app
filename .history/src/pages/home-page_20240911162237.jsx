import { useEffect, useState } from 'react'

import { AppLoader } from './app-loader.jsx'
import { BtnPrepareNote } from '../cmp/note/btn-prepare-note.jsx'
import { PrepareNote } from '../cmp/note/prepare-note.jsx'

export function HomePage() {
  // if (!iconsStays) return <AppLoader />
  return (
    <section className="home-page">
      <header className="prepare-note">
        <BtnPrepareNote />
        <PrepareNote />
      </header>
      <main></main>
    </section>
  )
}
