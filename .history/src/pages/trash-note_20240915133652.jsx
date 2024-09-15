import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../cmp/note/preview-note'
import { EditNoteFromToolsBar } from '../cmp/note/note/edit-note-from-tools-bar'

import { loadNotes, removeNote, updateNote } from '../store/note.action'

export function TrashNote() {
  const filterBy = { isTrash: true }
  const { notes } = useSelector((state) => state.noteModule)

  useEffect(() => {
    console.log('loadNotes:')
    loadNotes(filterBy)
  }, [])

  function recycleNote(note) {
    const newUpdateNote = { ...note }
    newUpdateNote.isTrash = false
    updateNote(newUpdateNote).then(() => console.log('done'))
  }

  console.log('notes:', notes)
  return (
    <section className="trash-note">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} />

          <ul className="tools-bar-trash flex align-center">
            <li onClick={() => recycleNote(note)}>
              <i className="fa-solid fa-trash-arrow-up"></i>
            </li>
            <li onClick={() => removeNote(note._id)}>
              <i className="fa-solid fa-trash"></i>
            </li>
          </ul>
        </article>
      ))}
    </section>
  )
}
