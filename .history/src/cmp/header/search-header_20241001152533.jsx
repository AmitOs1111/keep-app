import { useEffect, useRef, useState } from 'react'
import { useForm } from '../../customHooks/useForm'
import { useNavigate } from 'react-router-dom'
import { utilService } from '../../services/util.service'
import { useTranslation } from 'react-i18next'

export function SearchHeader() {
  const [content, setContent, handelChange] = useForm({ txt: '' })
  const [page, setPage] = useState('home')
  const [isOpenInput, setIsOpenInput] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  function handleFocus() {
    setPage('search')
    if (!content.txt) navigate('/search')
  }

  useEffect(() => {
    if (page === 'search-list' && !content.txt) {
      setPage('search')
      navigate('/search')
      console.log('page search:')
    }

    if (page === 'search' && content.txt) {
      setPage('search-list')
      navigate(`/search/text/${content.txt}`)
      console.log('page search-list:')
    }

    if (page === 'search-list' && content.txt) {
      changeSearch.current(content.txt)
      console.log('page search-list:')
    }
  }, [content])

  //------Debounce-----------
  changeSearch = useRef(utilService.debounce(changeSearch))

  function changeSearch(txt) {
    navigate(`/search/text/${txt}`)
  }

  function openInput() {
    setIsOpenInput((prevIsOpenInput) => !prevIsOpenInput)
  }

  return (
    <section className="search-header flex ">
      <button className="flex" onClick={() => openInput()}>
        <i className="fa-solid fa-magnifying-glass flex align-center justify-center"></i>
      </button>
      <input
        type="search"
        placeholder={t('app_search')}
        name="txt"
        value={content.txt}
        onChange={handelChange}
        onFocus={handleFocus}
      />
    </section>
  )
}
