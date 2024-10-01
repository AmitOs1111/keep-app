import emailjs from 'emailjs-com'
import { useRef } from 'react'

export function SharingModal({ note }) {
  const currNote = useRef({ ...note })

  function sendNoteToWhatsApp() {
    const info = currNote.current.info
    const msgNote = `
${info.title.trim()}
${getContent().trim()}
`
      .split('\n') // Split the whole string into lines
      .map((line) => line.trim()) // Trim each line to remove extra spaces
      .join('\n') // Join the lines back with newlines

    // const msgNote = { title: info.title, txt: getContent() }
    const phoneNumber = '972502158919' // Replace with the recipient's phone number in international format (without + or special characters)
    const message = encodeURIComponent(JSON.stringify(msgNote)) // URL-encode the note content to handle special characters and spaces
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank')
  }

  function getContent() {
    const info = currNote.current.info
    // console.log('info:', info)
    switch (info.type) {
      case 'txt':
        return info.txt

      case 'todo':
        return info.todos.map((todo) => todo.txt).join('\n')

      case 'video':
        return info.video.url
    }
  }

  function sendEmail() {
    if (!currNote.current) return
    const templateParams = {
      to_name: 'Amit',
      from_name: 'Keep-App',
      title: currNote.current.info.title, // Your note content
      txt: getContent(), // Your note content
    }
    console.log('templateParams:', templateParams)
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
      <button onClick={() => sendNoteToWhatsApp()}>
        <i className="fa-brands fa-whatsapp"></i>
      </button>
      <button onClick={() => sendEmail()}>
        <i className="fa-regular fa-envelope"></i>
      </button>
    </section>
  )
}
