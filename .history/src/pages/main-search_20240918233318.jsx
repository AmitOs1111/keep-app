import { useEffect, useState } from 'react'

import { SearchByType } from '../cmp/search/search-by-type.jsx'
import { SearchByLabel } from '../cmp/search/search-by-label.jsx'
import { SearchByCategory } from '../cmp/search/search-by-category.jsx'
import { SearchByColor } from '../cmp/search/search-by-color.jsx'

export function MainSearch() {
  const [filterBySearch, setFilterBySearch] = useState({
    type: '',
    labels: '',
    category: '',
    color: '',
  })

  useEffect(() => {
    console.log('filterBySearch:', filterBySearch)
  }, [filterBySearch])

  function changeFilterBySearch(val) {
    console.log('val:', val)
    setFilterBySearch((prev) => ({ ...prev, ...val }))
  }

  return (
    <section className="main-search">
      <SearchByType changeFilterBySearch={changeFilterBySearch} />
      <SearchByLabel changeFilterBySearch={changeFilterBySearch} />
      <SearchByCategory changeFilterBySearch={changeFilterBySearch} />
      <SearchByColor changeFilterBySearch={changeFilterBySearch} />
    </section>
  )
}
