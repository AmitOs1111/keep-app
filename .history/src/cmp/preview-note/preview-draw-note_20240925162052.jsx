import { img1 } from '../../assets/img/demo1.jpg'

export function PreviewDrawNote({ editContentNote, note }) {
  return (
    <section className="preview-draw-note">
      <img
        src={note.src}
        // src={require('../../assets/img/demo1.jpg')}
        alt={'img'}
        style={{ width: '100%' }}
      />
    </section>
  )
}
