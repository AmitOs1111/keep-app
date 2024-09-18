import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { PreviewNote } from '../note/preview-note.jsx'
import { EditNoteFromToolsBar } from './note/edit-note-from-tools-bar.jsx'
import { PreviewLabelNote } from './note/preview-label-note.jsx'

import { loadNotes } from '../../store/note.action.js'

export function NoteList() {
  const filterBy = { isTrash: false, isArchive: false }
  const { notes } = useSelector((state) => state.noteModule)
  const hasLoaded = useRef(false)

  useEffect(() => {
    if (!hasLoaded.current) {
      loadNotes(filterBy).then(() => changeHasLoaded(true))
    }
    return changeHasLoaded(false)
  }, [notes])

  function changeHasLoaded(val) {
    hasLoaded.current = val
  }

  if (!notes || notes.length === 0) return <section>Loading...</section>
  // console.log('notes:', notes)
  return (
    <section className="note-list">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} changeHasLoaded={changeHasLoaded} />
          {note.labels.length > 0 && (
            <PreviewLabelNote note={note} changeHasLoaded={changeHasLoaded} />
          )}
          <EditNoteFromToolsBar note={note} changeHasLoaded={changeHasLoaded} />
        </article>
      ))}
    </section>
  )
}
