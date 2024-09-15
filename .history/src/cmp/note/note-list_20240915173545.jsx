import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../note/preview-note.jsx'
import { EditNoteFromToolsBar } from './note/edit-note-from-tools-bar.jsx'

import { loadNotes } from '../../store/note.action.js'

export function NoteList() {
  const filterBy = { isTrash: false }
  const { notes } = useSelector((state) => state.noteModule)
  const hasLoaded = useRef(false)

  useEffect(() => {
    console.log('loadNotes:')
    if (!hasLoaded.current)
      loadNotes(filterBy).then(() => changeHasLoaded(true))
  }, [])

  function changeHasLoaded(val) {
    console.log('changeHasLoaded(val):', val)
    hasLoaded.current = val
  }

  console.log('notes:', notes)
  return (
    <section className="note-list">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} />
          <EditNoteFromToolsBar note={note} changeHasLoaded={changeHasLoaded} />
        </article>
      ))}
    </section>
  )
}
