export function PreviewLabelNote({ note = {}, changeHasLoaded }) {
  return (
    <section className="preview-label-note">
      <ul className="clean-list flex">
        {note.labels.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
    </section>
  )
}
