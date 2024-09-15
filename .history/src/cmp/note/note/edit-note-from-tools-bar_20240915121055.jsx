import { ToolsBar } from '../tools-bar.jsx'

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
      <ToolsBar
        onRemoveNote={onRemoveNote}
        clickedTool={clickedTool}
        changeColor={changeColor}
      />
    </section>
  )
}
