import { ToolsBar } from '../tools-bar.jsx'

import { updateNote } from '../../../store/note.action.js'

export function EditNoteFromToolsBar({ note, changeHasLoaded }) {
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

  return (
    <section className="edit-note">
      <ToolsBar
        moveToTrash={moveToTrash}
        changeColor={changeColor}
        moveToArchive={moveToArchive}
      />
    </section>
  )
}
