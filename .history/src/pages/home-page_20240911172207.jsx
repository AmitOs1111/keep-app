import { useEffect, useState } from 'react'

import { AppLoader } from './app-loader.jsx'

import { PrepareNoteIndex } from '..prepare-note-index.jsx'

export function HomePage() {
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
