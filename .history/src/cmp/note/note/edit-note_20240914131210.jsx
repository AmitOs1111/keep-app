import { ToolsBar } from '../tools-bar'

export function EditNote() {
  function changeColor(color) {
    setStyle(color)
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
