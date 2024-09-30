import { StyleModal } from '../../cmp/tools-bar/style-modal.jsx'
import { SharingModal } from '../../cmp/tools-bar/sharing-modal.jsx'
import { ReminderModal } from '../../cmp/tools-bar/reminder-modal.jsx'
import { MoreModal } from '../../cmp/tools-bar/more-modal.jsx'
import { LabelModal } from '../../cmp/tools-bar/label-modal.jsx'

export function ModalToolsBar({
  typeModal,
  changeColor,
  moveToTrash,
  copyNote,
  addLabel,
  onClickedTool,
  changeContent,
  note = { note },
}) {
  return (
    <section
      className={`modal-tools-bar ${typeModal === 'style' ? 'style' : ''}`}
    >
      <DynamicCmp
        cmpType={typeModal}
        changeColor={changeColor}
        moveToTrash={moveToTrash}
        copyNote={copyNote}
        addLabel={addLabel}
        onClickedTool={onClickedTool}
        changeContent={changeContent}
        note={note}
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
      return (
        <ReminderModal changeContent={props.changeContent} note={props.note} />
      )

    case 'more':
      return (
        <MoreModal
          moveToTrash={props.moveToTrash}
          copyNote={props.copyNote}
          onClickedTool={props.onClickedTool}
        />
      )

    case 'label':
      return <LabelModal addLabel={props.addLabel} />
  }
}
