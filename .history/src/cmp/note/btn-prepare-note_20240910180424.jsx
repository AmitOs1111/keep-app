export function BtnPrepareNote() {
  return (
    <section className="btn-prepare-note ">
      <div className="btn-prepare-note-content flex align-center">
        <h2>new note...</h2>
        <div className="box-type-note flex align-center">
          <ul className="flex clean-list">
            <li>
              <i className="fa-regular fa-image"></i>
            </li>
            <li>
              <i className="fa-regular fa-pen-to-square"></i>
            </li>
            <li>
              <i className="fa-regular fa-square-check"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
