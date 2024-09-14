import { ToolsBar } from '../tools-bar'

import { updateNote, removeNote } from '../../../store/note.action.js'

export function EditNote({ note }) {
  function onRemoveNote() {
    console.log(' onRemoveNote:')
    removeNote(note._id)
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
      <ToolsBar clickedTool={clickedTool} changeColor={changeColor} />
    </section>
  )
}
