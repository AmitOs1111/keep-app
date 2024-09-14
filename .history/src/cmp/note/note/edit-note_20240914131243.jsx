import { ToolsBar } from '../tools-bar'

export function EditNote() {
  function changeColor(color) {
    console.log('color:', color)
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
