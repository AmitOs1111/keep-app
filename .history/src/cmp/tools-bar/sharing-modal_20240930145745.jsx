import emailjs from 'emailjs-com'
import { useRef } from 'react'

export function SharingModal({ note }) {
  const currNote = useRef({ ...note })

  function sendToWhatsApp() {
    console.log('sendToWhatsApp():')
  }

  function getContent() {
    const info = currNote.current.info
    switch (info.type) {
      case 'txt':
        return info.txt
        break
      case 'todo':
        return `
    ${info.todos.map((todo, idx) => <h3>{todo.txt}</h3>)}
      `
        break
      case 'txt':
        return info.txt
        break
    }
  }

  function sendEmail() {
    console.log('currNote.current:', currNote.current)
    if (!currNote.current) return
    const templateParams = {
      to_name: 'Amit',
      from_name: 'Keep-App',
      title: currNote.current.info.title, // Your note content
      txt: getContent(), // Your note content
    }

    emailjs
      .send(
        'service_i7a9hsn',
        'template_wdf7gd9',
        templateParams,
        'YL9umn57wlgEc4VEA'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
        },
        (err) => {
          console.log('FAILED...', err)
        }
      )
  }
  // console.log('note:', note)
  return (
    <section className="sharing-modal flex column">
      <button onClick={() => sendToWhatsApp()}>
        <i className="fa-brands fa-whatsapp"></i>
      </button>
      <button onClick={() => sendEmail()}>
        <i className="fa-regular fa-envelope"></i>
      </button>
    </section>
  )
}
