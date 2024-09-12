import { useEffect, useState } from 'react'

import { AppLoader } from './app-loader.jsx'
import { BtnPrepareNote } from '../cmp/note/btn-prepare-note.jsx'
import { PrepareNote } from '../cmp/note/prepare-note.jsx'
import { PrepareNoteIndex } from '../cmp/note/prepare-index.jsx'

export function PareNoteIndex() {
  const [isPrepare, setIsPrepare] = useState(false)

  function togglePrepare() {
    setIsPrepare((prev) => !prev)
  }

  // if (!iconsStays) return <AppLoader />
  return (
    <section className="prepare-index">
      {!isPrepare && <BtnPrepareNote togglePrepare={togglePrepare} />}
      {isPrepare && <PrepareNote />}
    </section>
  )
}
