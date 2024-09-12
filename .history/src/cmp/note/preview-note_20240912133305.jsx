export function PreviewNote({ note }) {
  function getContent() {
    console.log('getcontent')
    switch (note.type) {
      case 'txt':
        console.log('text')
        return <p>{note.info.txt}</p>
        break
      case 'list':
        return getTodoList(note.info.todos)
        break
    }
  }

  function getTodoList(todos) {
    return todos.map((todo) => <li>todo1</li>)
  }

  return (
    <section className="preview-note">
      <h3>{note.info.title}</h3>
      <div className="content-preview-note">{getContent()}</div>
    </section>
  )
}
