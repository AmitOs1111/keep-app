export function SearchByCategory({ changeFilterBySearch }) {
  return (
    <section className="search-by-category">
      <h2>Category</h2>
      <ul className="clean-list flex">
        <li
          onClick={() => changeFilterBySearch({ category: 'place' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-regular fa-image"></i>
          <h3>image</h3>
        </li>
        <li
          onClick={() => changeFilterBySearch({ category: 'music' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-solid fa-headphones"></i>
          <h3>music</h3>
        </li>
        <li
          onClick={() => changeFilterBySearch({ category: 'movie' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-solid fa-list"></i>
          <h3>list</h3>
        </li>
        <li
          onClick={() => changeFilterBySearch({ category: 'food' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-solid fa-link"></i>
          <h3>web link</h3>
        </li>
      </ul>
    </section>
  )
}
