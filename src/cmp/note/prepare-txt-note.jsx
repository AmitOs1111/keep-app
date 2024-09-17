import { useEffect, useRef } from 'react'
import { useForm } from '../../customHooks/useForm'
import { utilService } from '../../services/util.service'

export function PrepareTxtNote({ changeContent, value = '' }) {
  const [content, setContent, handelChange] = useForm({ txt: value })

  //------Debounce-----------
  onSetContent = useRef(utilService.debounce(onSetContent))

  useEffect(() => {
    onSetContent.current(content)
  }, [content])

  function onSetContent(partOfContent) {
    changeContent(partOfContent)
  }

  return (
    <section className="prepare-txt-note ">
      <textarea
        onChange={handelChange}
        name="txt"
        id="txt"
        value={content.txt}
        placeholder="New note..."
        rows={4}
        cols={40}
      ></textarea>
    </section>
  )
}
