export function SharingModal() {
  function sendToWhatsApp() {
    console.log('sendToWhatsApp():')
  }

  function sendToGmail() {
    console.log('sendToGmail')
  }

  return (
    <section className="sharing-modal">
      <button onClick={() => sendToWhatsApp()}>
        <i className="fa-brands fa-whatsapp"></i>
      </button>
      <button onClick={() => sendToGmail()}>
        <i className="fa-regular fa-envelope"></i>
      </button>
    </section>
  )
}
