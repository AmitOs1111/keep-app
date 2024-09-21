export function SearchByCategory({ changeFilterBySearch }) {
  return (
    <section className="search-by-category search-type ">
      <h2>Category</h2>
      <ul className="clean-list flex">
        <li
          onClick={() => changeFilterBySearch({ category: 'place' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-solid fa-location-dot"></i>
          <h3>place</h3>
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
          <i className="fa-solid fa-film"></i>
          <h3>movie</h3>
        </li>
        <li
          onClick={() => changeFilterBySearch({ category: 'food' })}
          className="flex column align-center justify-center"
        >
          <i className="fa-solid fa-utensils"></i>
          <h3>food</h3>
        </li>
      </ul>
    </section>
  )
}
