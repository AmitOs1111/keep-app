import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export function PrepareImgNote({ changeContent }) {
  const [uploadedFiles, setUploadedFiles] = useState([])

  useEffect(() => {
    console.log('uploadedFiles:', uploadedFiles)
    if (uploadedFiles.length > 0) {
      changeContent({ src: URL.createObjectURL(uploadedFiles[0]) })
    }
  }, [uploadedFiles])

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

  function loadImageFromInput(ev, onImageReady) {
    let reader = new FileReader()
    console.log('ev:', ev)
    reader.onload = (event) => {
      var img = new Image()
      img.src = event.target.result
      console.log('img:', img)
      // img.onload = onImageReady.bind(null, img)
    }
    reader.readAsDataURL(ev.target.files[0])
  }

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
        <div style={{ marginTop: '20px' }}>
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
        </div>
      </div>

      <input type="file" onChange={loadImageFromInput} />

      <div className="container-img">
        {/* <img src={uploadImg.src} alt="" /> */}
      </div>
    </section>
  )
}
