import { img1 } from '../../assets/img/demo1.jpg'

export function PreviewDrawNote({ editContentNote, note }) {
  console.log('note:', note)
  console.log('note.src:', note.src)
  return (
    <section className="preview-draw-note">
      <img
        src={note.info.src}
        // src={require('../../assets/img/demo1.jpg')}
        alt={'img'}
        style={{ width: '100%' }}
      />
    </section>
  )
}
