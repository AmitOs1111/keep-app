import { useEffect, useState } from 'react'

import { BtnPrepareNote } from './btn-prepare-note.jsx'
import { PrepareNote } from './prepare-note.jsx'

import { addNote } from '../../store/note.action.js'

export function PrepareNoteIndex() {
  const [isPrepare, setIsPrepare] = useState(false)
  const [typeNote, setTypeNote] = useState('txt')

  function togglePrepare() {
    setIsPrepare((prev) => !prev)
  }

  function changeTypeNote(type = 'txt') {
    console.log('type:', type)
    setTypeNote(type)
    togglePrepare()
  }

  function addNoteToList(newNote) {
    if (newNote.info.title || newNote.info.txt) addNote(newNote)
    togglePrepare()
  }

  return (
    <section className="prepare-note-index">
      {!isPrepare && <BtnPrepareNote changeTypeNote={changeTypeNote} />}
      {isPrepare && (
        <PrepareNote addNoteToList={addNoteToList} typeNote={typeNote} />
      )}
    </section>
  )
}
