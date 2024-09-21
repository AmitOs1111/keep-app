export function SearchByType({ changeBySearch }) {
  return (
    <section className="search-by-type search-type ">
      <h2>Type</h2>
      <ul className="clean-list flex">
        <li
          onClick={() => changeBySearch({ type: 'img' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-regular fa-image"></i>
          <h3>image</h3>
        </li>
        <li
          onClick={() => changeBySearch({ type: 'reminder' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-regular fa-bell"></i>
          <h3>reminder</h3>
        </li>
        <li
          onClick={() => changeBySearch({ type: 'todo' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-solid fa-list"></i>
          <h3>list</h3>
        </li>
        <li
          onClick={() => changeBySearch({ type: 'link' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-solid fa-link"></i>
          <h3>web link</h3>
        </li>
      </ul>
    </section>
  )
}
