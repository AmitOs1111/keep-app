import { useState } from 'react'

import { ToolsBar } from '../note/tools-bar.jsx'
import { PrepareTxtNote } from './prepare-txt-note.jsx'
import { PrepareTodoNote } from './prepare-todo-note.jsx'
import { PrepareTodoDndNote } from './prepare-todo-dnd-note.jsx'
import { PrepareImgNote } from './prepare-img-note.jsx'
// import { PrepareImgFromCanvasNote } from './prepare-img-from-canvas-note.jsx'
import { PrepareDrawNote } from './prepare-draw-note.jsx'

import { useForm } from '../../customHooks/useForm.js'
import { noteService } from '../../services/localService/note.service.local.js'

export function PrepareNote({ addNoteToList, typeNote, note = null }) {
  const contentInfo = note ? note.info : noteService.getEmptyInfo(typeNote)
  const [info, setInfo, handelChange] = useForm(contentInfo)

  const contentStyle = note ? note.style : { backgroundColor: '#fff' }
  const [style, setStyle] = useState(contentStyle)

  function changeContent(val) {
    setInfo((prevInfo) => ({ ...prevInfo, ...val }))
  }

  function changeColor(color) {
    setStyle(color)
  }

  function onAddNote() {
    const newNote = { style, info }
    addNoteToList(newNote)
  }

  if (!info) return <h2>Loading...</h2>
  // console.log('info:', info)
  return (
    <section className="prepare-note " style={style}>
      <div className="header-prepare-note flex space-between align-center">
        <input
          type="text"
          placeholder="title"
          name="title"
          value={info.title}
          onChange={handelChange}
        />
        <div className="mark">
          <i className="fa-solid fa-thumbtack"></i>
        </div>
      </div>

      <div className="main-prepare-note">
        <DynamicCmp
          cmpType={typeNote}
          info={info}
          changeContent={changeContent}
        />
      </div>

      <div className="note-footer flex space-between align-center">
        <button onClick={() => onAddNote()}>close</button>
        <ToolsBar changeColor={changeColor} />
      </div>
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'txt':
      return (
        <PrepareTxtNote changeContent={props.changeContent} info={props.info} />
      )

    case 'todo':
      return
      ;<PrepareTodoDndNote
        info={props.info}
        changeContent={props.changeContent}
      />
    //  return <PrepareTodoNote
    //     info={props.info}
    //     changeContent={props.changeContent}
    //   />

    case 'img':
      // return <PrepareImgFromCanvasNote changeContent={props.changeContent} />
      return <PrepareImgNote changeContent={props.changeContent} />

    case 'draw':
      return <PrepareDrawNote changeContent={props.changeContent} />

    // case 'video':
    // return <GuestModal onSetFilterByEdit={props.onSetFilterByEdit} />
  }
}
