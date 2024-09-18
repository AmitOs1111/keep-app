import { img1 } from '../../assets/img/demo1.jpg'
import { img2 } from '../../assets/img/demo2.jpg'
export function PreviewImgNote({ editContentNote, note }) {
  return (
    <section className="preview-img-note">
      <img
        // src={note.src}
        src={img1}
        // src={require(`../../assets/img/${note.src}`)}
        alt={'img'}
        style={{ width: '100%', position: 'absolute' }}
      />
    </section>
  )
}
