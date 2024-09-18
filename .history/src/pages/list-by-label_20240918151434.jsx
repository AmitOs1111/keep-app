import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { loadNotes } from '../store/note.action'
import { useParams } from 'react-router-dom'

export function ListByLabel() {
  const params = useParams()
  const filterBy = { labels: params.label }
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
