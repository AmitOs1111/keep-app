import { useState } from 'react'

export function SearchHeader() {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    setIsFocused(true)
    console.log('Input has gained focus')
  }

  const handleBlur = () => {
    setIsFocused(false)
    console.log('Input has lost focus')
  }

  return (
    <section className="search-header flex align-center">
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        type="search"
        placeholder="search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </section>
  )
}
