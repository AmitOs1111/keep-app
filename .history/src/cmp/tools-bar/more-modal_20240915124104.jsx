export function MoreModal({ moveToTrash }) {
  return (
    <section className="more-modal">
      <ul className="more-modal-list clean-list">
        <li onClick={() => moveToTrash()}>delete note</li>
        <li>create copy</li>
        <li>add tag</li>
      </ul>
    </section>
  )
}
