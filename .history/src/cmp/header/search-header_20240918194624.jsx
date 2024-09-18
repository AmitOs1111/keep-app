import { useState } from 'react'
import { useForm } from '../../customHooks/useForm'

export function SearchHeader() {
  const [content, setContent, handelChange] = useForm({ txt: '' })

  function handleFocus() {}

  //------Debounce-----------
  // onSetContent = useRef(utilService.debounce(onSetContent))

  // useEffect(() => {
  //   onSetContent.current(content)
  // }, [content])

  // function onSetContent(partOfContent) {
  //   changeContent(partOfContent)
  // }

  return (
    <section className="search-header flex align-center">
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        type="search"
        placeholder="search"
        name="search"
        value={content.txt}
        onChange={handelChange}
        onFocus={handleFocus}
      />
    </section>
  )
}
