export function SearchByColor({ changeBySearch }) {
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
    <section className="search-by-color search-type ">
      <h2>Color</h2>
      <ul className="color-box flex align-center justify-center clean-list">
        {colors.map((clr) => (
          <li
            className="li-color "
            key={clr.backgroundColor}
            style={clr}
            onClick={() => changeBySearch(clr)}
          ></li>
        ))}
      </ul>
    </section>
  )
}
