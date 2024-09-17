import { ToolsBar } from '../tools-bar.jsx'

import { updateNote } from '../../../store/note.action.js'

export function EditNoteFromToolsBar({ note, changeHasLoaded }) {
  function moveToTrash() {
    const noteToUpdate = { ...note }
    noteToUpdate.isTrash = true
    changeHasLoaded(false)
    updateNote(noteToUpdate)
  }

  function moveToArchive() {
    console.log('moveToArchive :')
    const noteToUpdate = { ...note }
    noteToUpdate.isArchive = !noteToUpdate.isArchive
    changeHasLoaded(false)
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
