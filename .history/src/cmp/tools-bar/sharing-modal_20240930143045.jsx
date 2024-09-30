import emailjs from 'emailjs-com'

export function SharingModal({ note }) {
  function sendToWhatsApp() {
    console.log('sendToWhatsApp():')
  }

  function sendEmail(note) {
    if (!note) return
    const templateParams = {
      to_name: 'Amit',
      message: note, // Your note content
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
