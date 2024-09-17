import { useNavigate } from 'react-router-dom'

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
      <DynamicCmp cmpType={note.info.type} editContentNote={editContentNote} />
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'txt':
      return <PreviewTxtNote editContentNote={props.editContentNote} />

    case 'list':
      return <PreviewTodoNote editContentNote={props.editContentNote} />

    case 'img':
      return <PreviewImgNote editContentNote={props.editContentNote} />
  }
}
