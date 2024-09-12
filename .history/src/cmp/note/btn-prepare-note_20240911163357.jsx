export function BtnPrepareNote() {
  return (
    <section className="btn-prepare-note">
      <div className="btn-prepare-note-content flex align-center space-between">
        <h3>new note...</h3>
        <div className="box-type-note flex align-center">
          <ul className=" clean-list">
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
