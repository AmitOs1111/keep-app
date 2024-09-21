import { useForm } from '../customHooks/useForm'

import { SearchByType } from '../cmp/search/search-by-type.jsx'
import { SearchByLabel } from '../cmp/search/search-by-label.jsx'
import { SearchByCategory } from '../cmp/search/search-by-category.jsx'
import { SearchByColor } from '../cmp/search/search-by-color.jsx'

export function MainSearch() {
  const [filterBySearch, setFilterBySearch, handelChange] = useForm({
    type: '',
    labels: '',
    category: '',
    color: '',
  })

  return (
    <section className="main-search">
      <SearchByType />
      <SearchByLabel />
      <SearchByCategory />
      <SearchByColor />
    </section>
  )
}
