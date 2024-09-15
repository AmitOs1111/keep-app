import { useSelector } from 'react-redux'

export function TrashNote() {
  const filterBy = { isTrash: true }
  const { notes } = useSelector((state) => state.noteModule)

  useEffect(() => {
    console.log('loadNotes:')
    loadNotes(filterBy)
  }, [])
  console.log('notes:', notes)

  return (
    <section className="trash-note">
      {notes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} />
          <EditNoteFromToolsBar note={note} />
        </article>
      ))}
    </section>
  )
}
