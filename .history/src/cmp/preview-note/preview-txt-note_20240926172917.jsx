export function PreviewTxtNote({ editContentNote, note }) {
  function calculateRowsForTextArea(text, textareaWidth = 180, charWidth = 14) {
    const lines = text.split('\n')
    // Split by newlines to get explicit lines
    let totalRows = 0
    lines.forEach((line) => {
      // Calculate how many rows this line would need
      const lineLength = line.length
      const rowsForLine = Math.ceil((lineLength * charWidth) / textareaWidth)
      totalRows += rowsForLine + 1
    })
    return totalRows
  }

  return (
    <section className="preview-txt-note" onClick={() => editContentNote()}>
      <header className="preview-txt-note-header flex align-center">
        <i className="fa-solid fa-thumbtack"></i>
        <h3>{note.info.title}</h3>
      </header>
      <main className="preview-txt-note-main">
        <textarea
          name="txt"
          id="txt"
          rows={calculateRowsForTextArea(note.info.txt)}
        >
          {note.info.txt}
        </textarea>
      </main>
    </section>
  )
}
