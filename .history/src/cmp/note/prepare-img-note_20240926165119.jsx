import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export function PrepareImgNote({ changeContent }) {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const canvasRef = useRef(null)

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      resizeCanvas()
      setRatioImgToCanvas()
      clearCanvas()
      gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
      changeContent({ src: URL.createObjectURL(uploadedFiles[0]) })
    }
  }, [uploadedFiles])

  function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Note: changing the canvas dimension this way clears the canvas
    gElCanvas.width = elContainer.offsetWidth
    // Unless needed, better keep height fixed.
    gElCanvas.height = elContainer.offsetHeight
  }

  const onDrop = useCallback((acceptedFiles) => {
    // Process the files as needed
    if (Array.isArray(acceptedFiles)) {
      setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]) // Append new files to the existing state
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*', // Only accept images
  })

  console.log('uploadedFiles:', uploadedFiles)
  return (
    <section className="prepare-img-note ">
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #cccccc',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the images here ...</p>
        ) : (
          <p>Drag 'n' drop some images here, or click to select images</p>
        )}

        {/* Preview Uploaded Images */}
        {/* <div style={{ marginTop: '20px' }}>
          {uploadedFiles.map((file) => (
            <div key={file.path}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: '100px' }}
              />
              <p>{file.name}</p>
            </div>
          ))}
        </div> */}
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          style={{ border: '1px solid black', marginTop: '20px' }}
        />
      </div>
    </section>
  )
}
