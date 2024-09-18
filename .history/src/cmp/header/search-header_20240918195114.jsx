import { useState } from 'react'
import { useForm } from '../../customHooks/useForm'
import { useNavigate } from 'react-router-dom'

export function SearchHeader() {
  const [content, setContent, handelChange] = useForm({ txt: '' })
  const navigate = useNavigate()

  function handleFocus() {
    if (!content.txt) navigate('/search')
  }

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
