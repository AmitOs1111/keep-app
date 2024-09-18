export function LabelModal({ addLabel }) {
  const labels = [
    {
      title: 'Work',
    },
    {
      title: 'Personal',
    },
    {
      title: 'Food',
    },
    {
      title: 'Inspiration',
    },
  ]

  return (
    <section className="label-modal">
      <ul className="clean-list">
        {labels.map((item) => (
          <li
            key={item.title}
            className="flex align-center label"
            onClick={() => {
              addLabel(item.title)
            }}
          >
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}
