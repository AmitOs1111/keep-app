export function SearchByLabel({ changeFilterBySearch }) {
  const labels = [
    {
      title: 'Work',
      svg: ` <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              color= "#2073e8"
            >
              <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path>
            </svg>`,
    },
    {
      title: 'Personal',
      svg: ` <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path>
            </svg>`,
    },
    {
      title: 'Food',
      svg: ` <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path>
            </svg>`,
    },
    {
      title: 'Inspiration',
      svg: ` <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path>
            </svg>`,
    },
  ]

  function HtmlContent({ htmlString }) {
    return (
      <div
        className="flex align-center justify-center"
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    )
  }

  return (
    <section className="search-by-label search-type ">
      <h2>Labels</h2>
      <ul className="clean-list flex">
        {labels.map((item) => (
          <li
            key={item.title}
            className="flex column justify-center align-center label"
            onClick={() => {
              changeFilterBySearch({ labels: item.title })
            }}
          >
            <HtmlContent htmlString={item.svg} />
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}
