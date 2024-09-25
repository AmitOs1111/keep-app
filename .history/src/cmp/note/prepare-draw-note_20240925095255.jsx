import React, { useRef, useEffect, useState } from 'react'

export function PrepareDrawNote({ changeContent }) {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    // Set some initial properties for the canvas (optional)
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    // Clean up the event listeners on component unmount
    return () => {
      setIsDrawing(false)
    }
  }, [])

  // Handle the start of drawing
  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    // Get mouse position relative to the canvas
    setLastPos({ x: offsetX, y: offsetY })
    setIsDrawing(true)
  }
  // Handle drawing while moving the mouse
  const handleMouseMove = (e) => {
    if (!isDrawing) return
    // If not drawing, do nothing
    const { offsetX, offsetY } = e.nativeEvent
    // Get current mouse position
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    // Draw a line from the last position to the current position
    ctx.beginPath()
    ctx.moveTo(lastPos.x, lastPos.y)
    ctx.lineTo(offsetX, offsetY)
    ctx.strokeStyle = '#ff5733'
    // Color of the stroke
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.closePath()
    // Update the last position to the current one
    setLastPos({ x: offsetX, y: offsetY })
  }

  // Handle the end of drawing
  const handleMouseUp = () => {
    setIsDrawing(false)
    downloadCanvas()
  }

  // Clear the canvas (optional, if you want a button to clear the drawing)
  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  function downloadCanvas() {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const data = ctx.toDataURL()
    console.log('data:', data)
    var reader = new FileReader()

    reader.onload = (event) => {
      var img = new Image()
      img.src = data
      console.log('img:', img)
      // img.onload = () => addNewImgGallery(src)
      //   img.onload = onImageReady.bind(null, img)
    }
    // reader.readAsDataURL(ev.target.files[0])
  }

  return (
    <section className="prepare-draw-note">
      <h3>Draw Pinnacle on Canvas</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        style={{ border: '1px solid black' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        // Stop drawing if the mouse leaves the canvas
      />
      <br />
      <button onClick={clearCanvas}>Clear Canvas</button>
    </section>
  )
}
