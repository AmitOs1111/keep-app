import { useEffect, useState } from 'react'

import { AppLoader } from './app-loader.jsx'
import { BtnPrepareNote } from '../cmp/note/btn-prepare-note.jsx'
import { PrepareNote } from '../cmp/note/prepare-note.jsx'
import { PrepareNoteIndex } from '../cmp/note/prepare-index.jsx'

export function HomePage() {
  f

  // if (!iconsStays) return <AppLoader />
  return (
    <section className="home-page">
      <header className="prepare-note">
        <PrepareNoteIndex />
      </header>
      <main></main>
    </section>
  )
}
