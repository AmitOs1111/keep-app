import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../note/preview-note.jsx'
import { ToolsBar } from './tools-bar.jsx'

import { loadNotes } from '../../store/note.action.js'

export function NoteList() {
  const { notes } = useSelector((state) => state.noteModule)

  useEffect(() => {
    loadNotes()
  }, [])

  return (
    <section className="note-list">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.background}>
          <PreviewNote note={note} />
          <ToolsBar />
        </article>
      ))}
    </section>
  )
}
