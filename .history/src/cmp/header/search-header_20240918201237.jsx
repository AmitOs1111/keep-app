import { useEffect, useState } from 'react'
import { useForm } from '../../customHooks/useForm'
import { useNavigate } from 'react-router-dom'

export function SearchHeader() {
  const [page, setPage] = useState('home')
  const [content, setContent, handelChange] = useForm({ txt: '' })
  const navigate = useNavigate()

  function handleFocus() {
    setPage('search')
    if (!content.txt) navigate('/search')
  }

  useEffect(() => {
    if (page === 'search-list' && !content.txt) {
      setPage('search')
      console.log('page search:')
    }
    if (page === 'search' && content.txt) {
      setPage('search-list')
      console.log('page search-list:')
    }
  }, [content])

  return (
    <section className="search-header flex align-center">
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        type="search"
        placeholder="search"
        name="txt"
        value={content.txt}
        onChange={handelChange}
        onFocus={handleFocus}
      />
    </section>
  )
}
