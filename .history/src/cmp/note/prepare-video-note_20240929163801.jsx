import { useEffect, useState } from 'react'

export function PrepareVideoNote({ changeContent }) {
  const [video, setVideo] = useState({ url: '' })

  useEffect(() => {
    if (video.url && video.videoId) {
      console.log('video:', video)
      changeContent({ video: video })
    }
  }, [video])

  function handelChange({ target }) {
    console.log('[target.name]:target.value:', { [target.name]: target.value })
    const url = target.value
    const videoId = url.split('=')[1]
    setVideo({
      url,
      videoId,
    })
  }

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
      <input
        type="text"
        placeholder="copy a link from Youtube..."
        name="url"
        onChange={handelChange}
      />
      <YouTubeEmbed videoId={video.videoId} />
    </section>
  )
}
