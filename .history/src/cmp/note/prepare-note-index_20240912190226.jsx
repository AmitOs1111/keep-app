import { useEffect, useState } from 'react'

import { BtnPrepareNote } from './btn-prepare-note.jsx'
import { PrepareNote } from './prepare-note.jsx'

export function PrepareNoteIndex() {
  const [isPrepare, setIsPrepare] = useState(false)
  const [typeNote, setTypeNote] = useState('txt')

  function togglePrepare() {
    setIsPrepare((prev) => !prev)
  }

  function changeTypeNote(type = 'text') {
    setTypeNote(type)
    togglePrepare()
  }

  return (
    <section className="prepare-note-index">
      {!isPrepare && <BtnPrepareNote changeTypeNote={changeTypeNote} />}
      {isPrepare && (
        <PrepareNote togglePrepare={togglePrepare} typeNote={typeNote} />
      )}
    </section>
  )
}
