import React, { useRef, useEffect, useState } from 'react'

export function PrepareDrawNote({ changeContent }) {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })
  const [design, setDesign] = useState({ width: 2, color: 'black' })

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

  function changeDesign({ target }, type, val) {
    if (target) {
      type = 'color'
      val = target.value
    }

    setDesign((prev) => ({
      ...prev,
      [type]: val,
    }))
  }

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
    ctx.strokeStyle = design.color
    // Color of the stroke
    ctx.lineWidth = design.width
    ctx.stroke()
    ctx.closePath()
    // Update the last position to the current one
    setLastPos({ x: offsetX, y: offsetY })
  }

  // Handle the end of drawing
  const handleMouseUp = () => {
    setIsDrawing(false)
    saveCanvasAsImage()
  }

  // Clear the canvas (optional, if you want a button to clear the drawing)
  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  // Save the canvas content as an image
  function saveCanvasAsImage() {
    const canvas = canvasRef.current
    const dataURL = canvas.toDataURL('image/png')
    // Get the image as a PNG data URL

    var img = new Image()
    img.src = dataURL
    // console.log('img:', img)
    changeContent({ src: dataURL })
  }

  return (
    <section className="prepare-draw-note">
      <div className="canvas-tools flex align-center justify-center">
        <button className="palette">
          <i className="fa-solid fa-palette "></i>
          <input
            type="color"
            name="color"
            value={design.color}
            onChange={changeDesign}
          />
        </button>
        <button onClick={() => changeDesign('', 'width', 2)}>
          <i className="fa-solid fa-pen small"></i>
        </button>
        <button onClick={() => changeDesign('', 'width', 4)}>
          <i className="fa-solid fa-pen medium"></i>
        </button>
        <button onClick={() => changeDesign('', 'width', 6)}>
          <i className="fa-solid fa-pen large"></i>
        </button>
        <button onClick={() => changeDesign('', 'width', 8)}>
          <i className="fa-solid fa-brush brush"></i>
        </button>
      </div>
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
