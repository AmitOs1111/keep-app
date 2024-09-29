import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { PreviewNote } from '../note/preview-note.jsx'
import { EditNoteFromToolsBar } from './note/edit-note-from-tools-bar.jsx'
import { PreviewLabelNote } from './note/preview-label-note.jsx'

import { loadNotes, reorderNotes } from '../../store/note.action.js'

export function NoteList() {
  const filterBy = { isTrash: false, isArchive: false }
  const { notes } = useSelector((state) => state.noteModule)
  const hasLoaded = useRef(false)
  const [orderNotes, setOrderNotes] = useState([...notes])

  useEffect(() => {
    if (!hasLoaded.current) {
      loadNotes(filterBy).then((notes) => {
        console.log('notes:', notes)
        setOrderNotes([...notes])
        changeHasLoaded(true)
      })
    }
    return changeHasLoaded(false)
  }, [notes])

  // useEffect(() => {
  //   if (hasLoaded.current) {
  //     changeHasLoaded(false)
  //     reorderNotes(orderNotes).then(() => {
  //       console.log('orderNotes:', orderNotes)
  //     })
  //   }
  //   // return changeHasLoaded(false)
  // }, [orderNotes])

  function changeHasLoaded(val) {
    hasLoaded.current = val
  }

  //----Drag&Drop----

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
    // padding: 8,
    // margin: `0 0 5px 0`,
    border: '1px solid lightgrey',
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

    const items = reorder(notes, result.source.index, result.destination.index)

    // setOrderNotes(items)
    changeHasLoaded(false)
    reorderNotes(items).then((orderNotes) => {
      console.log('orderNotes:', orderNotes)
    })
  }

  console.log('orderNotes:', orderNotes)
  if (!orderNotes || orderNotes.length === 0)
    return <section>Loading...</section>
  // console.log('notes:', notes)
  return (
    <section className="note-list">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {orderNotes.map((note, idx) => (
                <Draggable key={note._id} draggableId={note._id} index={idx}>
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
                      <div className="note-card" style={note.style}>
                        <PreviewNote
                          note={note}
                          changeHasLoaded={changeHasLoaded}
                        />
                        {note.labels.length > 0 && (
                          <PreviewLabelNote
                            note={note}
                            changeHasLoaded={changeHasLoaded}
                          />
                        )}
                        <EditNoteFromToolsBar
                          note={note}
                          changeHasLoaded={changeHasLoaded}
                        />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* {orderNotes.map((note) => (
        <article key={note._id} className="note-card" style={note.style}>
          <PreviewNote note={note} changeHasLoaded={changeHasLoaded} />
          {note.labels.length > 0 && (
            <PreviewLabelNote note={note} changeHasLoaded={changeHasLoaded} />
          )}
          <EditNoteFromToolsBar note={note} changeHasLoaded={changeHasLoaded} />
        </article>
      ))} */}
    </section>
  )
}
