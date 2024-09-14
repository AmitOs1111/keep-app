export function StyleModal({ changeColor }) {
  const colors = [
    { backgroundColor: '#efeff1' },
    { backgroundColor: '#e9e3d5' },
    { backgroundColor: '#f6e2dd' },
    { backgroundColor: '#d4bfdb' },
    { backgroundColor: '#aecddc' },
    { backgroundColor: '#d4e4ed' },
    { backgroundColor: '#b4ddd4' },
    { backgroundColor: '#e2f6d3' },
    { backgroundColor: '#fff9b8' },
    { backgroundColor: '#f49f76' },
    { backgroundColor: '#fbafa9' },
  ]

  return (
    <section className="style-modal">
      style-modal
      <ul className="color-box flex">
        {colors.map((clr) => (
          <li key={clr.backgroundColor} style={clr}></li>
        ))}
      </ul>
    </section>
  )
}
