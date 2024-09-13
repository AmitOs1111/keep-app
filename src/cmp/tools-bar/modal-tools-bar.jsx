import { StyleModal } from '../../cmp/tools-bar/style-modal.jsx'
import { SharingModal } from '../../cmp/tools-bar/sharing-modal.jsx'
import { ReminderModal } from '../../cmp/tools-bar/reminder-modal.jsx'

export function ModalToolsBar({ typeModal }) {
  return (
    <section className="modal-tools-bar">
      <DynamicCmp cmpType={typeModal} />
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'style':
      return <StyleModal />

    case 'sharing':
      return <SharingModal />

    case 'reminder':
      return <ReminderModal />
  }
}
