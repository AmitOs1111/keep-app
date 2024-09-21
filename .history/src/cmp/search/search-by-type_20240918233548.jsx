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
        <li
          onClick={() => changeFilterBySearch('reminder')}
          className="flex column align-center justify-center"
        >
          <i class="fa-regular fa-bell"></i>
          <h3>reminder</h3>
        </li>
        <li
          onClick={() => changeFilterBySearch('todo')}
          className="flex column align-center justify-center"
        >
          <i class="fa-solid fa-list"></i>
          <h3>list</h3>
        </li>
      </ul>
    </section>
  )
}
