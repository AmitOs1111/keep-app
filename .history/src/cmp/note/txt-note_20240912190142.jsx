export function TxtNote() {
  return (
    <section className="txt-note ">
      <textarea
        name="txt-note"
        id="txt-note"
        placeholder="New note..."
        rows={4}
        cols={40}
      ></textarea>
    </section>
  )
}
