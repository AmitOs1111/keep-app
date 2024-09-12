import { useForm } from '../../customHooks/useForm'
import { utilService } from '../../services/util.service'

export function TxtNote({ changeContent }) {
  const [content, setContent, handelChange] = useForm({ txt: '' })

  // utilService.debounce( handelChange)
  return (
    <section className="txt-note ">
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
