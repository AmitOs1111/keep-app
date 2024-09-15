import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../cmp/note/preview-note'

import { loadNotes, removeNote, updateNote } from '../store/note.action'

export function TrashNote() {
  const filterBy = { isTrash: true }
  const { notes } = useSelector((state) => state.noteModule)

  useEffect(() => {
    console.log('loadNotes:')
    loadNotes(filterBy)
  }, [])
  useEffect(() => {
    console.log('loadNotes:', notes)
    const { notes } = useSelector((state) => state.noteModule)
  }, [])

  function recycleNote(note) {
    const newUpdateNote = { ...note }
    newUpdateNote.isTrash = false
    updateNote(newUpdateNote).then(() => console.log('done'))
  }
  function clickedBtnToolsBar(type, note) {
    console.log('type:', type)
    if (type === 'remove') removeNote(note._id)
    if (type === 'recycle') recycleNote(note)
  }

  console.log('notes:', notes)
  return (
    <section className="trash-note">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} />

          <ul className="tools-bar-trash flex align-center clean-list">
            <li onClick={() => clickedBtnToolsBar('recycle', note)}>
              <i className="fa-solid fa-trash-arrow-up"></i>
            </li>
            <li onClick={() => clickedBtnToolsBar('remove', note)}>
              <i className="fa-solid fa-trash"></i>
            </li>
          </ul>
        </article>
      ))}
    </section>
  )
}
