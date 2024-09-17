import React from 'react'

import { updateNote } from '../../store/note.action.js'

export function PreviewTodoNote({ editContentNote, note, changeHasLoaded }) {
  function changeChecked(idx) {
    console.log('idx:', idx)
    const currNote = { ...note }
    currNote.info.todos[idx].isChecked = !currNote.info.todos[idx].isChecked
    updateNote(currNote)
  }

  return (
    <section className="preview-todo-note">
      <header
        className="preview-txt-note-header flex align-center"
        onClick={() => editContentNote()}
      >
        <i className="fa-solid fa-thumbtack"></i>
        <h3>{note.info.title}</h3>
      </header>
      <main className="preview-txt-note-main">
        {note.info.todos.map((todo, idx) => (
          <article key={idx} className="flex align-center space-between">
            <h3
              onClick={() => editContentNote()}
              className={todo.isChecked ? 'check' : ''}
            >
              {todo.txt}
            </h3>
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
