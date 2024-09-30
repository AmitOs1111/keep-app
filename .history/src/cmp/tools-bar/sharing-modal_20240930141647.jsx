import emailjs from 'emailjs-com'

export function SharingModal() {
  function sendToWhatsApp() {
    console.log('sendToWhatsApp():')
  }

  function sendEmail(note) {
    const templateParams = {
      to_name: 'Recipient Name',
      message: note, // Your note content
    }

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_USER_ID'
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
