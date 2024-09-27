import { useEffect, useRef, useState } from 'react'
// import { useForm } from '../../customHooks/useForm'

import { utilService } from '../../services/util.service'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export function PrepareTodoDndNote({ changeContent = null, info = null }) {
  const [todos, setTodos] = useState(info.todos || [])

  //------Debounce-----------
  onSetContent = useRef(utilService.debounce(onSetContent))

  useEffect(() => {
    onSetContent.current(todos)
  }, [todos])

  function onSetContent(content) {
    changeContent({ todos: content })
  }

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
    const newTodos = [...todos]
    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }

  // fake data generator

  //   const [todos, setTodos] = useState([
  //     { id: 'fsv', txt: 'i18', isChecked: false },
  //     { id: 'fifgg1', txt: 'Mq', isChecked: false },
  //     { id: 'fbwdfgb', txt: 'Map', isChecked: false },
  //     { id: 'dbwdfb3', txt: 'Video', isChecked: false },
  //     { id: 'hgng-4', txt: 'Scss', isChecked: false },
  //   ])

  // a little function to help us with reordering the result
  function reorder(list, startIndex, endIndex) {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: 8,
    margin: `0 0 5px 0`,
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    // change background colour if dragging
    background: isDragging ? '#fff' : '',

    // styles we need to apply on draggables
    ...draggableStyle,
  })

  const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? 'lightgrey' : '',
    // padding: 8,
    // width: 250,
  })

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(todos, result.source.index, result.destination.index)

    setTodos(items)
  }

  console.log('todos:', todos)
  return (
    // <section className="prepare-todo-note ">
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {todos.map((todo, idx) => (
              <Draggable key={todo.id} draggableId={todo.id} index={idx}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <input
                      type="text"
                      value={todo.txt}
                      name={idx}
                      placeholder={todo.txt || 'Writing todo...'}
                      onChange={handelChange}
                    />
                    {todo.isChecked && (
                      <i className="fa-regular fa-square-check"></i>
                    )}
                    {!todo.isChecked && (
                      <i
                        onClick={() => deleteTodo(idx)}
                        className="fa-regular fa-square"
                      ></i>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            <div className="btn-add-todo flex align-center">
              <label htmlFor="add-todo"></label>{' '}
              <i className="fa-solid fa-plus"></i>
              <input
                type="text"
                id="add-todo"
                placeholder="add todo..."
                onChange={addTodoToList}
              />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    // </section>
  )
}
