import { ToolsBar } from '../tools-bar'

import { updateNote } from '../../../store/note.action'

export function EditNote({ note }) {
  function changeColor(color) {
    console.log('color:', color)
    const updateNote = { ...note }
    updateNote.style = color
    updateNote(updateNote)
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
