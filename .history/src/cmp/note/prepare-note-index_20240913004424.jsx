import { useEffect, useState } from 'react'

import { BtnPrepareNote } from './btn-prepare-note.jsx'
import { PrepareNote } from './prepare-note.jsx'

export function PrepareNoteIndex() {
  const [isPrepare, setIsPrepare] = useState(false)
  const [typeNote, setTypeNote] = useState('txt')

  function togglePrepare() {
    setIsPrepare((prev) => !prev)
  }

  function changeTypeNote(type = 'txt') {
    setTypeNote(type)
    togglePrepare()
  }

  function addNote(newNote) {
    console.log('addNote', newNote)
    togglePrepare()
  }

  return (
    <section className="prepare-note-index">
      {!isPrepare && <BtnPrepareNote changeTypeNote={changeTypeNote} />}
      {isPrepare && <PrepareNote addNote={addNote} typeNote={typeNote} />}
    </section>
  )
}
