import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'

import { loadNotes } from '../store/note.action'

export function SearchList() {
  const params = useParams()
  const [filterBySearchList, setFilterBySearchList] = useState({ search: '' })

  useEffect(() => {
    console.log('hello list search')
    console.log('params.text:', params.text)
    setFilterBySearchList({ search: params.text })
  }, [params])

  useEffectUpdate(loadNotes(filterBySearchList), filterBySearchList)
  return <section className="search-list">SearchList</section>
}
