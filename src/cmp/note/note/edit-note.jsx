import { ToolsBar } from '../tools-bar'

import { updateNote } from '../../../store/note.action.js'

export function EditNote({ note }) {
  function changeColor(color) {
    console.log('color:', color)
    const noteToUpdate = { ...note }
    noteToUpdate.style = color
    updateNote(noteToUpdate)
  }

  function clickedTool(tool) {
    console.log('tool:', tool)
  }
  return (
    <section className="edit-note">
      <ToolsBar clickedTool={clickedTool} changeColor={changeColor} />
    </section>
  )
}
