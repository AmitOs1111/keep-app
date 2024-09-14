import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { loadNoteById } from '../store/note.action'

export function EditContentNote() {
  const params = useParams()
  const navigate = useNavigate()
  // const location = useLocation()

  const [note, setNote] = useState(null)

  useEffect(() => {
    console.log('params.id:', params.id)
    loadNoteById(params.id).then((note) => setNote(note))
  }, [])

  return <section className="edit-content-note"></section>
}
