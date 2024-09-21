import { useEffect, useState } from 'react'
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

  useEffect(() => {
    console.log('hello list search')
    console.log('params.text:', params.text)
    setFilterBySearchList({ search: params.text })
  }, [params])

  // useEffectUpdate(loadNotes(filterBySearchList), filterBySearchList)

  return (
    <section className="search-list">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} />
          {note.labels.length > 0 && <PreviewLabelNote note={note} />}
          <EditNoteFromToolsBar note={note} />
        </article>
      ))}
    </section>
  )
}
