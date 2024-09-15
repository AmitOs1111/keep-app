import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../note/preview-note.jsx'
import { EditNoteFromToolsBar } from './note/edit-note-from-tools-bar.jsx'

import { loadNotes } from '../../store/note.action.js'

export function NoteList() {
  const filterBy = { isTrash: false }
  const { notes } = useSelector((state) => state.noteModule)
  useEffect(() => {
    console.log('loadNotes:')
    loadNotes(filterBy)
  }, [])

  console.log('notes:', notes)
  return (
    <section className="note-list">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} />
          <EditNoteFromToolsBar note={note} />
        </article>
      ))}
    </section>
  )
}
