export function PreviewTodoNote({ editContentNote, note }) {
  return (
    <section className="preview-todo-note">
      <header className="preview-txt-note-header flex align-center">
        <i className="fa-solid fa-thumbtack"></i>
        <h3>{note.info.title}</h3>
      </header>
      <main className="preview-txt-note-main">
        {note.info.todos.map(() => (
          <article key={note._id} className="flex align-center space-between">
            {todo.isChecked && <i className="fa-regular fa-square-check"></i>}
            {!todo.isChecked && (
              <i
                onClick={() => deleteTodo(idx)}
                className="fa-regular fa-square"
              ></i>
            )}
          </article>
        ))}
      </main>
    </section>
  )
}
