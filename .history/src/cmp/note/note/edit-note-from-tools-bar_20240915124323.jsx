import { ToolsBar } from '../tools-bar.jsx'

import { updateNote } from '../../../store/note.action.js'

export function EditNoteFromToolsBar({ note }) {
  function moveToTrash() {
    console.log('moveToTrash')
    const noteToUpdate = { ...note }
    noteToUpdate.isTrash = true
    updateNote(noteToUpdate)
  }

  function changeColor(color) {
    const noteToUpdate = { ...note }
    noteToUpdate.style = color
    updateNote(noteToUpdate)
  }

  function clickedTool(tool) {
    console.log('tool:', tool)
  }
  return (
    <section className="edit-note">
      <ToolsBar
        moveToTrash={moveToTrash}
        clickedTool={clickedTool}
        changeColor={changeColor}
      />
    </section>
  )
}
