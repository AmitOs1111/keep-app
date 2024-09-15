import { useState } from 'react'
import { useForm } from '../../customHooks/useForm'

export function ListNote({ changeContent = null }) {
  // const [content, setContent, handelChange] = useForm({ todos:[] })
  const [todos, setTodos] = useState([{ txt: 'hello', isChecked: false }])

  function addTodoToList({ target }) {
    if (target.value) {
      setTodos((prevTodos) => [...prevTodos, { txt: '', isChecked: false }])
    }
    target.value = ''
  }

  function handelChange({ target }) {}

  console.log('todos:', todos)
  return (
    <section className="list-note ">
      {todos.map((todo, idx) => (
        <article key={idx} className="flex space-between align-center">
          <input
            type="text"
            value={todos[idx].txt}
            name={idx}
            placeholder={todo.txt || 'text'}
            onChange={handelChange}
          />
          {todo.isChecked && <i className="fa-regular fa-square-check"></i>}
          {!todo.isChecked && <i className="fa-regular fa-square"></i>}
        </article>
      ))}
      <div className="btn-add-todo flex align-center">
        <label htmlFor="add-todo"></label> <i className="fa-solid fa-plus"></i>
        <input
          type="text"
          id="add-todo"
          placeholder="add todo..."
          onChange={addTodoToList}
        />
      </div>
    </section>
  )
}
