export function SearchByType({ changeFilterBySearch }) {
  return (
    <section className="search-by-type">
      <h2>Type</h2>
      <ul className="clean-list">
        <li
          onClick={() => changeFilterBySearch('img')}
          className="flex column align-center justify-center"
        >
          <i class="fa-regular fa-image"></i>
          <h3>image</h3>
        </li>
      </ul>
    </section>
  )
}
