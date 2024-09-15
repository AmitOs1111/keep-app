import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../cmp/note/preview-note'

import { loadNotes, removeNote, updateNote } from '../store/note.action'

export function TrashNote() {
  const filterBy = { isTrash: true }
  const { notes } = useSelector((state) => state.noteModule)
  const hasLoaded = useRef(false)

  useEffect(() => {
    if (!hasLoaded.current) console.log('loadNotes:')
    loadNotes(filterBy).then(() => (hasLoaded.current = true))
  }, [notes])

  function recycleNote(note) {
    const newUpdateNote = { ...note }
    newUpdateNote.isTrash = false
    updateNote(newUpdateNote).then(() => (hasLoaded.current = false))
  }
  function clickedBtnToolsBar(type, note) {
    console.log('type:', type)
    if (type === 'remove')
      removeNote(note._id).then(() => (hasLoaded.current = false))
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
