import { img1 } from '../../assets/img/demo1.jpg'

export function PreviewImgNote({ editContentNote, note }) {
  return (
    <section className="preview-img-note">
      <img
        // src={note.info.src}
        src={require('../../assets/img/demo1.jpg')}
        alt={'img'}
        style={{ width: '100%' }}
      />
    </section>
  )
}
