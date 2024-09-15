import { StyleModal } from '../../cmp/tools-bar/style-modal.jsx'
import { SharingModal } from '../../cmp/tools-bar/sharing-modal.jsx'
import { ReminderModal } from '../../cmp/tools-bar/reminder-modal.jsx'
import { MoreModal } from '../../cmp/tools-bar/more-modal.jsx'

export function ModalToolsBar({ typeModal, changeColor, moveToTrash }) {
  return (
    <section className="modal-tools-bar">
      <DynamicCmp
        cmpType={typeModal}
        changeColor={changeColor}
        moveToTrash={moveToTrash}
      />
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'style':
      return <StyleModal changeColor={props.changeColor} />

    case 'sharing':
      return <SharingModal />

    case 'reminder':
      return <ReminderModal />

    case 'more':
      return <MoreModal moveToTrash={props.moveToTrash} />
  }
}
