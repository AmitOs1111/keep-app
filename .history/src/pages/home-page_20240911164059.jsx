import { useEffect, useState } from 'react'

import { AppLoader } from './app-loader.jsx'
import { BtnPrepareNote } from '../cmp/note/btn-prepare-note.jsx'
import { PrepareNote } from '../cmp/note/prepare-note.jsx'

export function HomePage() {
  const [isPrepare, setIsPrepare] = useState(false)

  function togglePrepare() {
    setIsPrepare((prev) => !prev)
  }

  // if (!iconsStays) return <AppLoader />
  return (
    <section className="home-page">
      <header className="prepare-note">
        <BtnPrepareNote togglePrepare={togglePrepare} />
        <PrepareNote />
      </header>
      <main></main>
    </section>
  )
}
