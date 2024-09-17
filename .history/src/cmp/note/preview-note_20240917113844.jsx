import { useNavigate } from 'react-router-dom'

import { PreviewTxtNote } from '../../cmp/preview-note/preview-txt-note.jsx'
import { PreviewTodoNote } from '../../cmp/preview-note/preview-todo-note.jsx'
import { PreviewImgNote } from '../../cmp/preview-note/preview-img-note.jsx'

export function PreviewNote({ note = {}, changeHasLoaded }) {
  const navigate = useNavigate()

  function editContentNote() {
    navigate(`/note/${note._id}`)
  }

  return (
    <section className="preview-note">
      <DynamicCmp
        cmpType={note.info.type}
        editContentNote={editContentNote}
        note={note}
      />
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'txt':
      return (
        <PreviewTxtNote
          editContentNote={props.editContentNote}
          note={props.note}
        />
      )

    case 'list':
      return (
        <PreviewTodoNote
          editContentNote={props.editContentNote}
          note={props.note}
          changeHasLoaded={changeHasLoaded}
        />
      )

    case 'img':
      return (
        <PreviewImgNote
          editContentNote={props.editContentNote}
          note={props.note}
        />
      )
  }
}
