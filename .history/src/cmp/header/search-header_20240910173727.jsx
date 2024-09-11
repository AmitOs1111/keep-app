import { SearchHeader } from '../cmp/header/search-header.jsx'

export function SearchHeader() {
  return (
    <section className="search-header">
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input type="search" placeholder="search" />
      <button>X</button>
    </section>
  )
}
