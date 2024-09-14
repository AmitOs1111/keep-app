import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../note/preview-note.jsx'
import { ToolsBarOfNote } from './tools-bar-of-note.jsx'

import { loadNotes } from '../../store/note.action.js'

export function NoteList() {
  const { notes } = useSelector((state) => state.noteModule)

  useEffect(() => {
    loadNotes()
  }, [])

  return (
    <section className="note-list">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} />
          <ToolsBarOfNote />
        </article>
      ))}
    </section>
  )
}
