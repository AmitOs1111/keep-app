import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'

import { loadNotes } from '../store/note.action'
import { PreviewNote } from '../cmp/note/preview-note'
import { PreviewLabelNote } from '../cmp/note/note/preview-label-note'
import { EditNoteFromToolsBar } from '../cmp/note/note/edit-note-from-tools-bar'
import { useSelector } from 'react-redux'

export function SearchList() {
  const params = useParams()
  const [filterBySearchList, setFilterBySearchList] = useState({ search: '' })
  const { notes } = useSelector((state) => state.noteModule)
  const hasLoaded = useRef(false)

  useEffect(() => {
    setFilterBySearchList({ search: params.text })
  }, [params])

  useEffect(() => {
    console.log('filterBySearchList:', filterBySearchList)
    if (!hasLoaded.current) {
      loadNotes(filterBySearchList).then(() => changeHasLoaded(true))
    }
    return changeHasLoaded(false)
  }, [filterBySearchList])

  function changeHasLoaded(val) {
    hasLoaded.current = val
  }

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
