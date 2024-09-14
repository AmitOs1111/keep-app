import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { loadNoteById } from '../store/note.action'
import { PrepareNote } from '../cmp/note/prepare-note'

import { updateNote } from '../store/note.action.js'

export function EditContentNote() {
  const params = useParams()
  const navigate = useNavigate()
  // const location = useLocation()

  const [note, setNote] = useState(null)

  useEffect(() => {
    loadNoteById(params.id).then((note) => setNote(note))
  }, [])

  function addNoteToList(updatedNote) {
    const newUpdateNote = { ...note, ...updatedNote }
    updateNote(newUpdateNote)
  }

  if (!note) return <h2>Loading...</h2>
  return (
    <section className="edit-content-note">
      <PrepareNote
        note={note}
        addNoteToList={addNoteToList}
        typeNote={note.info.type}
      />
    </section>
  )
}
