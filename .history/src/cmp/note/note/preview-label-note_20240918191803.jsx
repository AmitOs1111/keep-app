import { updateNote } from '../../../store/note.action'

export function PreviewLabelNote({ note = {}, changeHasLoaded }) {
  function removeLabel(item) {
    console.log('removeLabel(item):', item)
    const noteToUpdate = { ...note }
    console.log('noteToUpdate.labels:', noteToUpdate.labels)
    noteToUpdate.labels.filter((label) => label !== item)
    console.log('noteToUpdate:', noteToUpdate)

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
