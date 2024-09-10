export function DarkScreen({ toggleDarkScreen }) {
  return (
    <section
      className="dark-screen"
      onClick={() => toggleDarkScreen(false)}
    ></section>
  )
}
