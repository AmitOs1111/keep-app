import { useState } from 'react'
import { useForm } from '../../customHooks/useForm'

export function ListNote({ changeContent = null }) {
  // const [content, setContent, handelChange] = useForm({ todos:[] })
  const [todos, setTodos] = useState([{ txt: 'hello', isChecked: false }])

  return (
    <section className="list-note ">
      {todos.map((todo, idx) => (
        <article key={idx} className="flex space-between align-center">
          <input type="text" placeholder={todo.txt || 'text'} />
          {todo.isChecked && <i className="fa-regular fa-square-check"></i>}
          {!todo.isChecked && <i className="fa-regular fa-square"></i>}
        </article>
      ))}
      <div className="btn-add-todo flex align-center">
        <i className="fa-solid fa-plus"></i>
        <input type="text" placeholder="add todo..." />
      </div>
    </section>
  )
}
