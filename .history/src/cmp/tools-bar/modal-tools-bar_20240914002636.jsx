import { StyleModal } from '../../cmp/tools-bar/style-modal.jsx'
import { SharingModal } from '../../cmp/tools-bar/sharing-modal.jsx'
import { ReminderModal } from '../../cmp/tools-bar/reminderM-modal.jsx'

export function ModalToolsBar() {
  return (
    <section className="modal-tools-bar">
      <DynamicCmp cmpType={typeNote} />
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
