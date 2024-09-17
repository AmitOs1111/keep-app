import { ToolsBar } from '../note/tools-bar'

export function PreviewTxtNote({ editContentNote, note }) {
  return (
    <section className="preview-txt-note">
      <header className="preview-txt-note-header flex">
        <i className="fa-solid fa-thumbtack"></i>
        <h3>{note.info.title}</h3>
      </header>
      <main className="preview-txt-note-main">
        <p>{note.info.txt}</p>
      </main>
      <footer className="preview-txt-note-footer">
        <ToolsBar />
      </footer>
    </section>
  )
}
