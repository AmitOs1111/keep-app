import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export function PrepareTodoDndNote({ changeContent = null, info = null }) {
  // fake data generator

  const [todos, setTodos] = useState([
    { id: 'fsv', txt: 'i18', isChecked: false },
    { id: 'fifgg1', txt: 'Mq', isChecked: false },
    { id: 'fbwdfgb', txt: 'Map', isChecked: false },
    { id: 'dbwdfb3', txt: 'Video', isChecked: false },
    { id: 'hgng-4', txt: 'Scss', isChecked: false },
  ])

  // a little function to help us with reordering the result
  function reorder(list, startIndex, endIndex) {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const grid = 8

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: 10,
    margin: `0 0 5px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
  })

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
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
            {todos.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
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
                    {item.txt}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    // </section>
  )
}
