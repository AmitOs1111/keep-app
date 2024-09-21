import { updateNote } from '../../../store/note.action'

export function PreviewLabelNote({ note = {}, changeHasLoaded = null }) {
  function removeLabel(item) {
    const noteToUpdate = { ...note }
    noteToUpdate.labels = noteToUpdate.labels.filter((label) => label !== item)
    updateNote(noteToUpdate)
  }

  return (
    <section className="preview-label-note">
      <ul className="clean-list flex">
        {note.labels.map((item, idx) => (
          <li key={idx} className="flex align-center">
            <h4>{item}</h4>
            <button onClick={() => removeLabel(item)}>x</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
