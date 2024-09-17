import React from 'react'

import { updateNote } from '../../store/note.action.js'

export function PreviewTodoNote({ editContentNote, note, changeHasLoaded }) {
  function changeChecked(idx) {
    console.log('idx:', idx)
    // changeHasLoaded(false)
    const currNote = { ...note }
    console.log('currNote1:', currNote)
    console.log('currNote.info.todos[idx]:', currNote.info.todos[idx])
    // const res = !currNote.info.todos[idx].isChecked
    currNote.info.todos[idx].isChecked = !currNote.info.todos[idx].isChecked
    // console.log('currNote2:', currNote)
    updateNote(currNote)
  }

  return (
    <section className="preview-todo-note">
      <header className="preview-txt-note-header flex align-center">
        <i className="fa-solid fa-thumbtack"></i>
        <h3>{note.info.title}</h3>
      </header>
      <main className="preview-txt-note-main">
        {note.info.todos.map((todo, idx) => (
          <article key={idx} className="flex align-center space-between">
            <h3 className={todo.isChecked ? 'check' : ''}>{todo.txt}</h3>
            <div className="check-box" onClick={() => changeChecked(idx)}>
              {todo.isChecked && <i className="fa-regular fa-square-check"></i>}
              {!todo.isChecked && <i className="fa-regular fa-square"></i>}
            </div>
          </article>
        ))}
      </main>
    </section>
  )
}
