export function PrepareVideoNote() {
  function YouTubeEmbed({ videoId }) {
    return (
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
    )
  }

  return (
    <section className="prepare-video-note">
      <YouTubeEmbed videoId="dQw4w9WgXcQ" />
    </section>
  )
}
