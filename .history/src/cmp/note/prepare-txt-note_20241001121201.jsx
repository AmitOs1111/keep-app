import { useEffect, useRef } from 'react'
import { useForm } from '../../customHooks/useForm'
import { utilService } from '../../services/util.service'
import { useTranslation } from 'react-i18next'

export function PrepareTxtNote({ changeContent, info = '' }) {
  const [content, setContent, handelChange] = useForm({ txt: info.txt })
  const { t } = useTranslation()

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
        placeholder={t('prepare-note-textarea')}
        rows={4}
        cols={40}
      ></textarea>
    </section>
  )
}
