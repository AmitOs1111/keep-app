import { useState } from 'react'

import { ToolsBar } from '../note/tools-bar.jsx'
import { TxtNote } from '../note/txt-note.jsx'
import { ListNote } from '../note/list-note.jsx'
import { ImgNote } from '../note/img-note.jsx'

import { useForm } from '../../customHooks/useForm.js'
import { noteService } from '../../services/localService/note.service.local.js'

export function PrepareNote({ addNoteToList, typeNote, note = null }) {
  const [info, setInfo, handelChange] = useForm(
    note.info || noteService.getEmptyInfo(typeNote)
  )
  const [style, setStyle] = useState({ backgroundColor: '#fff' })

  function changeContent(val) {
    setInfo((prevInfo) => ({ ...prevInfo, ...val }))
  }

  function changeColor(color) {
    setStyle(color)
  }

  function clickedTool(tool) {
    console.log('tool:', tool)
  }

  function onAddNote() {
    const newNote = { style, info }
    addNoteToList(newNote)
  }

  return (
    <section className="prepare-note " style={style}>
      <div className="header-prepare-note flex space-between align-center">
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handelChange}
        />
        <div className="mark">
          <i className="fa-solid fa-thumbtack"></i>
        </div>
      </div>

      <div className="main-prepare-note">
        <DynamicCmp cmpType={typeNote} changeContent={changeContent} />
      </div>

      <div className="note-footer flex space-between align-center">
        <button onClick={() => onAddNote()}>close</button>
        <ToolsBar clickedTool={clickedTool} changeColor={changeColor} />
      </div>
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'txt':
      return <TxtNote changeContent={props.changeContent} />

    case 'list':
      return <ListNote changeContent={props.changeContent} />

    case 'img':
      return <ImgNote changeContent={props.changeContent} />

    // case 'video':
    // return <GuestModal onSetFilterByEdit={props.onSetFilterByEdit} />

    // case 'draw':
    // return <GuestModal onSetFilterByEdit={props.onSetFilterByEdit} />
  }
}
