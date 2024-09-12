import { PreviewNote } from '../note/preview-note.jsx'

export function NoteList() {
  const notes = [{}, {}]
  return (
    <section className="note-list">
      {notes.map((note) => (
        <article key={note._id}>
          <PreviewNote />
        </article>
      ))}
    </section>
  )
}
