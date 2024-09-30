import { ToolsBar } from '../tools-bar.jsx'

import { updateNote, addNote } from '../../../store/note.action.js'

export function EditNoteFromToolsBar({ note, changeHasLoaded = null }) {
  function moveToTrash() {
    changeHasLoaded(false)
    const noteToUpdate = { ...note }
    noteToUpdate.isTrash = true
    updateNote(noteToUpdate)
  }

  function moveToArchive() {
    changeHasLoaded(false)
    const noteToUpdate = { ...note }
    noteToUpdate.isArchive = !noteToUpdate.isArchive
    updateNote(noteToUpdate)
  }

  function changeColor(color) {
    const noteToUpdate = { ...note }
    noteToUpdate.style = color
    updateNote(noteToUpdate)
  }

  function addLabel(label) {
    const noteToUpdate = { ...note }
    if (noteToUpdate.labels.includes(label)) return

    noteToUpdate.labels.push(label)
    updateNote(noteToUpdate)
  }

  function copyNote() {
    const { info, style } = note
    addNote({ info, style })
  }
  console.log('note:', note)
  return (
    <section className="edit-note">
      <ToolsBar
        moveToTrash={moveToTrash}
        changeColor={changeColor}
        moveToArchive={moveToArchive}
        copyNote={copyNote}
        addLabel={addLabel}
      />
    </section>
  )
}
