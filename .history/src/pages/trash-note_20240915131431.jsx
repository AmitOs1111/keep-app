import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../cmp/note/preview-note'
import { EditNoteFromToolsBar } from '../cmp/note/note/edit-note-from-tools-bar'

import { loadNotes } from '../store/note.action'

export function TrashNote() {
  const filterBy = { isTrash: true }
  const { notes } = useSelector((state) => state.noteModule)

  useEffect(() => {
    console.log('loadNotes:')
    loadNotes(filterBy)
  }, [])
  console.log('notes:', notes)

  return (
    <section className="trash-note">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} />
          <EditNoteFromToolsBar note={note} />
        </article>
      ))}
    </section>
  )
}
