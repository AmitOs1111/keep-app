import { useState } from 'react'
import { useForm } from '../../customHooks/useForm'

export function ListNote({ changeContent = null }) {
  // const [content, setContent, handelChange] = useForm({ todos:[] })
  const [todos, setTodos] = useState([])

  return (
    <section className="list-note ">
      {todos.map((todo, idx) => (
        <article key={idx} className="flex space-between">
          <h3>{todo.txt}</h3>
          {todo.isChecked && <i className="fa-regular fa-square-check"></i>}
          {todo.isChecked && <i className="fa-regular fa-square"></i>}
        </article>
      ))}
    </section>
  )
}
