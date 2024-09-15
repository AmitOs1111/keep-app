import { useNavigate } from 'react-router-dom'

export function PreviewNote({ note }) {
  const navigate = useNavigate()

  function getContent() {
    switch (note.info.type) {
      case 'txt':
        return <p>{note.info.txt}</p>
        break
      case 'list':
        return getTodoList(note.info.todos)
        break
    }
  }

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

  function onEditContentNote() {
    console.log('onEditContentNote():')
    navigate(`/note/${note._id}`)
  }

  return (
    <section className="preview-note" onClick={() => onEditContentNote()}>
      <h3>{note.info.title}</h3>
      <div className="content-preview-note">{getContent()}</div>
    </section>
  )
}
