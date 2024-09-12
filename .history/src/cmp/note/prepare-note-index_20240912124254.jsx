import { useEffect, useState } from 'react'

import { BtnPrepareNote } from './btn-prepare-note.jsx'
import { PrepareNote } from './prepare-note.jsx'

export function PrepareNoteIndex() {
  const [isPrepare, setIsPrepare] = useState(false)

  function togglePrepare() {
    setIsPrepare((prev) => !prev)
  }

  return (
    <section className="prepare-note-index">
      {!isPrepare && <BtnPrepareNote togglePrepare={togglePrepare} />}
      {isPrepare && <PrepareNote togglePrepare={togglePrepare} />}
    </section>
  )
}
