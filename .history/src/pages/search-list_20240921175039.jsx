import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function SearchList() {
  const params = useParams()

  useEffect(() => {
    console.log('hello list search')
    console.log('params.text:', params.text)
  }, [])
  return <section className="search-list">SearchList</section>
}
