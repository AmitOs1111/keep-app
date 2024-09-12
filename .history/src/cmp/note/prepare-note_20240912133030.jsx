import { useState } from 'react'

import { ToolsBar } from '../note/tools-bar.jsx'
import { TextNote } from '../note/text-note.jsx'
import { ListNote } from '../note/list-note.jsx'
import { ImgNote } from '../note/img-note.jsx'

export function PrepareNote({ togglePrepare, typeNote }) {
  return (
    <section className="prepare-note ">
      <div className="header-prepare-note flex space-between align-center">
        <input type="text" placeholder="title" />
        <div className="mark">
          <i className="fa-solid fa-thumbtack"></i>
        </div>
      </div>

      <div className="main-prepare-note">
        <DynamicCmp cmpType={typeNote} />
      </div>

      <div className="tools-bar flex space-between align-center">
        <button onClick={() => togglePrepare()}>close</button>
        <ToolsBar />
      </div>
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'text':
      return <TextNote />

    case 'list':
      return <ListNote />

    case 'img':
      return <ImgNote />

    // case 'video':
    // return <GuestModal onSetFilterByEdit={props.onSetFilterByEdit} />

    // case 'draw':
    // return <GuestModal onSetFilterByEdit={props.onSetFilterByEdit} />
  }
}
