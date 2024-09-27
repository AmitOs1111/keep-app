import React, { useState, useRef } from 'react'
export function PrepareImgFromCanvasNote({ changeContent }) {
  const [image, setImage] = useState(null)
  const canvasRef = useRef(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.src = e.target.result

      img.onload = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        // Adjust the canvas size to match the uploaded image

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0)
      }
      setImage(img)
    }
    reader.readAsDataURL(file)
  }

  return (
    <section className="prepare-img-from-canvas-note">
      <h2>Upload an Image to Canvas</h2>
      {/* Input for uploading image */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {/* Canvas where the image will be drawn */}
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        style={{ border: '1px solid black', marginTop: '20px' }}
      />
      {/* Optional image preview */}

      {/* {image && (
        <div>
          {' '}
          <h4>Image Preview:</h4>
          <img
            src={image.src}
            alt="Uploaded"
            style={{ maxWidth: '100%', marginTop: '20px' }}
          />
        </div>
      )} */}
    </section>
  )
}
