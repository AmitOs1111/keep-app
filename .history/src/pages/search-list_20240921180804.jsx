import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'

import { loadNotes } from '../store/note.action'

export function SearchList() {
  const params = useParams()
  const [filterBySearchList, setFilterBySearchList] = useState({ search: '' })
  const { notes } = useSelector((state) => state.noteModule)

  useEffect(() => {
    console.log('hello list search')
    console.log('params.text:', params.text)
    setFilterBySearchList({ search: params.text })
  }, [params])

  useEffectUpdate(loadNotes(filterBySearchList), filterBySearchList)

  return (
    <section className="search-list">
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
