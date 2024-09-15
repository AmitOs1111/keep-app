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

  function handelChange({ target }) {
    const idx = target.name
    const currTodo = todos[idx]
    currTodo.txt = target.value

    const newTodos = [...todos]
    newTodos.splice(idx, 1, currTodo)
    setTodos(newTodos)
  }

  function deleteTodo(idx) {
    console.log('deleteTodo:', idx)
    const newTodos = [...todos]
    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }

  console.log('todos:', todos)
  return (
    <section className="list-note ">
      {todos.map((todo, idx) => (
        <article key={idx} className="flex space-between align-center">
          <button onClick={deleteTodo(idx)}>x</button>
          <input
            type="text"
            value={todo.txt}
            name={idx}
            placeholder={todo.txt || 'text'}
            onChange={handelChange}
          />
          {todo.isChecked && <i className="fa-regular fa-square-check"></i>}
          {!todo.isChecked && (
            <i onClick={deleteTodo(idx)} className="fa-regular fa-square"></i>
          )}
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
