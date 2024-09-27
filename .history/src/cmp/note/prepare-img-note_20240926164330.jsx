import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export function PrepareImgNote({ changeContent }) {
  const [uploadedFiles, setUploadedFiles] = useState([])

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      console.log('uploadedFiles[0]:', uploadedFiles[0])
      console.log(
        ' URL.createObjectURL(uploadedFiles[0]):',
        URL.createObjectURL(uploadedFiles[0])
      )
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
    </section>
  )
}
