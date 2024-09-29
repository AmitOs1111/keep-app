export function BtnPrepareNote({ changeTypeNote }) {
  function selectedTypeNote(type) {
    changeTypeNote(type)
  }

  return (
    <section className="btn-prepare-note ">
      <div className="btn-prepare-note-content flex align-center space-between">
        <h3 onClick={() => selectedTypeNote()}>new note...</h3>
        <div className="box-type-note flex align-center">
          <ul className="flex align-center clean-list">
            <li onClick={() => selectedTypeNote('img')}>
              <i className="fa-regular fa-image"></i>
            </li>
            <li onClick={() => selectedTypeNote('draw')}>
              <i className="fa-regular fa-pen-to-square"></i>
            </li>
            <li onClick={() => selectedTypeNote('todo')}>
              <i className="fa-regular fa-square-check"></i>
            </li>
            <li onClick={() => selectedTypeNote('video')}>
              <i className="fa-brands fa-youtube"></i>
            </li>
            <li onClick={() => selectedTypeNote('map')}>
              <i className="fa-solid fa-location-dot"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
