export function MoreModal({ onRemoveNote }) {
  return (
    <section className="more-modal">
      <ul className="more-modal-list">
        <li onClick={() => onRemoveNote()}>delete note</li>
      </ul>
    </section>
  )
}
