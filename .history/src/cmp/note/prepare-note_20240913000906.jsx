import { useState } from 'react'

import { ToolsBar } from '../note/tools-bar.jsx'
import { TxtNote } from '../note/txt-note.jsx'
import { ListNote } from '../note/list-note.jsx'
import { ImgNote } from '../note/img-note.jsx'

import { useForm } from '../../customHooks/useForm.js'

export function PrepareNote({ addNote, typeNote }) {
  const [newNote, setNewNote, handelChange] = useForm({ title: '', txt: '' })

  function changeContent(val) {
    setNewNote((prevNewNote) => ({ ...prevNewNote, ...val }))
  }

  return (
    <section className="prepare-note ">
      <div className="header-prepare-note flex space-between align-center">
        <input type="text" placeholder="title" />
        <div className="mark">
          <i className="fa-solid fa-thumbtack"></i>
        </div>
      </div>

      <div className="main-prepare-note">
        <DynamicCmp cmpType={typeNote} changeContent={changeContent} />
      </div>

      <div className="tools-bar flex space-between align-center">
        <button onClick={() => addNote()}>close</button>
        <ToolsBar />
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
