import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export function PrepareTodoDndNote({ changeContent = null, info = null }) {
  // fake data generator
  function getItems() {
    return [
      { txt: 'i18', isChecked: false },
      { txt: 'Mq', isChecked: false },
      { txt: 'Map', isChecked: false },
      { txt: 'Video', isChecked: false },
      { txt: 'Scss', isChecked: false },
    ]
  }

  // a little function to help us with reordering the result
  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const grid = 8

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

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

  return <section className="prepare-todo-note "></section>
}
