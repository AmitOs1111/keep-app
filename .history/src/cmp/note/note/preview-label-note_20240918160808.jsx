export function PreviewLabelNote({ note = {}, changeHasLoaded }) {
  function removeLabel(item) {
    console.log('removeLabel(item):', item)
  }
  return (
    <section className="preview-label-note">
      <ul className="clean-list flex">
        {note.labels.map((item, idx) => (
          <li key={idx} className="flex">
            <h4>{item}</h4>
            <button onClick={() => removeLabel(item)}>x</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
