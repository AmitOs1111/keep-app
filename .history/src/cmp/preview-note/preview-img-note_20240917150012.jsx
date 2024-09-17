export function PreviewImgNote({ editContentNote, note }) {
  return (
    <section className="preview-img-note">
      <img
        src={note.src}
        alt={'img'}
        style={{ width: '100%', position: 'absolute' }}
      />
    </section>
  )
}
