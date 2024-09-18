import {} from '../../assets/img/demo1.jpg'
export function PreviewImgNote({ editContentNote, note }) {
  return (
    <section className="preview-img-note">
      <img
        // src={note.src}
        src={require(`../../assets/img/${note.src}.jpg`)}
        alt={'img'}
        style={{ width: '100%', position: 'absolute' }}
      />
    </section>
  )
}
