import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchByType } from '../cmp/search/search-by-type.jsx'
import { SearchByLabel } from '../cmp/search/search-by-label.jsx'
import { SearchByCategory } from '../cmp/search/search-by-category.jsx'
import { SearchByColor } from '../cmp/search/search-by-color.jsx'

export function MainSearch() {
  const navigate = useNavigate()
  const [filterBySearch, setFilterBySearch] = useState({
    type: '',
    labels: '',
    category: '',
    color: '',
  })

  useEffect(() => {
    console.log('filterBySearch:', filterBySearch)
  }, [filterBySearch])

  function changeBySearch(val) {
    console.log('val:', val)
    setFilterBySearch((prev) => ({ ...prev, ...val }))
  }

  return (
    <section className="main-search">
      <SearchByType changeBySearch={changeBySearch} />
      <SearchByLabel changeBySearch={changeBySearch} />
      <SearchByCategory changeBySearch={changeBySearch} />
      <SearchByColor changeBySearch={changeBySearch} />
    </section>
  )
}
