import { ToolsBar } from '../note/tools-bar.jsx'

export function PrepareNote() {
  return (
    <section className="prepare-note ">
      <div className="header-prepare-note flex space-between align-center">
        <input type="text" placeholder="title" />
        <div className="mark">
          <i class="fa-solid fa-thumbtack"></i>
        </div>
      </div>

      <div className="tools-bar">
        <ToolsBar />
      </div>
    </section>
  )
}
