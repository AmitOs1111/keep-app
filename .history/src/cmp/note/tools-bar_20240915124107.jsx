import { useState } from 'react'

import { ModalToolsBar } from '../../cmp/tools-bar/modal-tools-bar.jsx'

export function ToolsBar({ clickedTool, changeColor, moveToTrash = null }) {
  const [typeModal, setTypeModal] = useState(null)

  function onClickedTool(type) {
    if (
      type === 'style' ||
      type === 'sharing' ||
      type === 'reminder' ||
      type === 'more'
    ) {
      if (typeModal === type) setTypeModal(null)
      else setTypeModal(type)
    }

    clickedTool(type)
  }

  return (
    <section className="tools-bar ">
      <ul className="box-tools flex space-between clean-list">
        <li onClick={() => onClickedTool('more')}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </li>
        <li onClick={() => onClickedTool('archive')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path>
          </svg>
        </li>
        <li onClick={() => onClickedTool('img')}>
          <i className="fa-regular fa-image"></i>
        </li>
        <li onClick={() => onClickedTool('style')}>
          <i className="fa-solid fa-palette"></i>
        </li>
        <li onClick={() => onClickedTool('sharing')}>
          <i className="fa-solid fa-user-plus"></i>
        </li>
        <li onClick={() => onClickedTool('reminder')}>
          <i className="fa-regular fa-bell"></i>
        </li>
      </ul>

      {typeModal && (
        <ModalToolsBar
          typeModal={typeModal}
          moveToTrash={moveToTrash}
          changeColor={changeColor}
        />
      )}
    </section>
  )
}
