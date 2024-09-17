import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../cmp/note/preview-note'

import { loadNotes, removeNote, updateNote } from '../store/note.action'

export function ArchiveNote() {
  const filterBy = { isArchive: true }
  const { notes } = useSelector((state) => state.noteModule)
  const hasLoaded = useRef(false)

  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true
      loadNotes(filterBy)
    }
  }, [notes])

  function recycleNote(note) {
    const newUpdateNote = { ...note }
    newUpdateNote.isArchive = false
    updateNote(newUpdateNote)
  }

  function clickedBtnToolsBar(type, note) {
    hasLoaded.current = false
    if (type === 'recycle') recycleNote(note)
  }

  console.log('notes:', notes)
  return (
    <section className="archive-note">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} />
        </article>
      ))}
    </section>
  )
}
