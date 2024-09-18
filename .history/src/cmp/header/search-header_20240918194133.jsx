import { useState } from 'react'

export function SearchHeader() {
  function handleFocus() {}

  return (
    <section className="search-header flex align-center">
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input type="search" placeholder="search" onFocus={handleFocus} />
    </section>
  )
}
