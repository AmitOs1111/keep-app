import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { PreviewNote } from '../cmp/note/preview-note'
import { EditNoteFromToolsBar } from '../cmp/note/note/edit-note-from-tools-bar'

import { loadNotes } from '../store/note.action'

export function ListByLabel() {
  const params = useParams()
  const filterBy = { label: params.label || '' }
  const { notes } = useSelector((state) => state.noteModule)
  const hasLoaded = useRef(false)

  useEffect(() => {
    console.log('filterBy:', filterBy)
    if (!hasLoaded.current) {
      loadNotes(filterBy).then(() => changeHasLoaded(true))
    }
    return changeHasLoaded(false)
  }, [notes])

  function changeHasLoaded(val) {
    hasLoaded.current = val
  }

  if (!notes) return <section>Empty</section>

  return (
    <section className="list-by-label">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} changeHasLoaded={changeHasLoaded} />
          <EditNoteFromToolsBar note={note} changeHasLoaded={changeHasLoaded} />
        </article>
      ))}
    </section>
  )
}
