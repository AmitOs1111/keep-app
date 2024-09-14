export function MoreModal({ onRemoveNote }) {
  return (
    <section className="more-modal">
      <ul className="more-modal-list clean-list">
        <li onClick={() => onRemoveNote()}>delete note</li>
        <li>create copy</li>
        <li>add tag</li>
      </ul>
    </section>
  )
}
