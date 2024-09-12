export function TextNote() {
  return (
    <section className="text-note ">
      <textarea
        name="txt-note"
        id="txt-note"
        placeholder="New note..."
        rows={4}
        cols={4}
      ></textarea>
    </section>
  )
}
