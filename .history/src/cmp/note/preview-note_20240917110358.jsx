import { useNavigate } from 'react-router-dom'

import { PreviewTxtNote } from '../../cmp/preview-note/preview-txt-note.jsx'
import { PreviewTodoNote } from '../../cmp/preview-note/preview-todo-note.jsx'
import { PreviewImgNote } from '../../cmp/preview-note/preview-img-note.jsx'

export function PreviewNote({ note }) {
  const navigate = useNavigate()

  function getTodoList(todos) {
    return (
      <section>
        {todos.map((todo, idx) => (
          <article key={idx} className="flex space-between align-center">
            <h3>{todo.txt}</h3>
            {todo.isChecked && <i className="fa-regular fa-square-check"></i>}
            {!todo.isChecked && <i className="fa-regular fa-square"></i>}
          </article>
        ))}
      </section>
    )
  }

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
        <PreviewTxtNote editContentNote={props.editContentNote} note={note} />
      )

    case 'list':
      return (
        <PreviewTodoNote editContentNote={props.editContentNote} note={note} />
      )

    case 'img':
      return (
        <PreviewImgNote editContentNote={props.editContentNote} note={note} />
      )
  }
}
