import { ToolsBar } from '../tools-bar'

export function EditNote() {
  return (
    <section className="edit-note">
      <ToolsBar clickedTool={clickedTool} changeColor={changeColor} />
    </section>
  )
}
