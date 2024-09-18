import { useState } from 'react'

export function MoreModal({ moveToTrash, copyNote, onClickedTool }) {
  return (
    <section className="more-modal">
      <ul className="more-modal-list clean-list">
        <li onClick={() => moveToTrash()}>delete note</li>
        <li onClick={() => copyNote()}>create copy</li>
        <li onClick={() => onClickedTool('label')}>add tag</li>
      </ul>
    </section>
  )
}
