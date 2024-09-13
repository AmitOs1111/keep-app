import { useState } from 'react'

import { ToolsBar } from '../note/tools-bar.jsx'
import { TxtNote } from '../note/txt-note.jsx'
import { ListNote } from '../note/list-note.jsx'
import { ImgNote } from '../note/img-note.jsx'

import { useForm } from '../../customHooks/useForm.js'

export function PrepareNote({ addNoteToList, typeNote }) {
  const [newNote, setNewNote, handelChange] = useForm({
    style: { backgroundColor: '#fff' },
    info: {
      type: typeNote,
      title: '',
      txt: '',
      todos: [],
      src: '',
      videoId: {},
    },
  })

  function changeContent(val) {
    setNewNote((prevNewNote) => {
      const newInfo = { ...prevNewNote.info, ...val }
      return { ...prevNewNote, ...newInfo }
    })
  }

  function onAddNote() {
    // console.log('newNote:', newNote)
    const info = { type: typeNote, ...newNote }
    addNoteToList(info)
  }

  function setSelectedToolsBar(tool) {
    console.log('tool:', tool)
  }

  return (
    <section className="prepare-note ">
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
        <ToolsBar setSelectedToolsBar={setSelectedToolsBar} />
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
