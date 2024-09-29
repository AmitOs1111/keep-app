export function PreviewImgVideoNote({ editContentNote, note }) {
  return (
    <section className="preview-video-note">
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube"
        ></iframe>
      </div>
    </section>
  )
}
