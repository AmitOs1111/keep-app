import { useEffect, useState } from 'react'

import { AppLoader } from './app-loader.jsx'

import { PrepareNoteIndex } from '../cmp/note/prepare-note-index.jsx'
import { NoteList } from '../cmp/note/note-list.jsx'

export function HomePage() {
  // if (!iconsStays) return <AppLoader />
  return (
    <section className="home-page">
      <header className="prepare-note">
        <PrepareNoteIndex />
      </header>
      <main>
        <NoteList />
      </main>
    </section>
  )
}
