export function BtnPrepareNote({ changeTypeNote }) {
  function selectedTypeNote(type) {
    changeTypeNote(type)
  }

  return (
    <section className="btn-prepare-note">
      <div className="btn-prepare-note-content flex align-center space-between">
        <h3 onClick={() => selectedTypeNote()}>new note...</h3>
        <div className="box-type-note flex align-center">
          <ul className="flex  clean-list">
            <li onClick={() => selectedTypeNote('img')}>
              <i className="fa-regular fa-image"></i>
            </li>
            <li onClick={() => selectedTypeNote('draw')}>
              <i className="fa-regular fa-pen-to-square"></i>
            </li>
            <li onClick={() => selectedTypeNote('list')}>
              <i className="fa-regular fa-square-check"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
