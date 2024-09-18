import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { loadNotes } from '../store/note.action'

export function ListByLabel() {
  const filterBy = { labels: '' }
  const { notes } = useSelector((state) => state.noteModule)
  const hasLoaded = useRef(false)

  useEffect(() => {
    if (!hasLoaded.current) {
      loadNotes(filterBy).then(() => changeHasLoaded(true))
    }
    return changeHasLoaded(false)
  }, [notes])

  function changeHasLoaded(val) {
    hasLoaded.current = val
  }

  if (!notes) return <section>Empty</section>
  return <section className="list-by-label"></section>
}
