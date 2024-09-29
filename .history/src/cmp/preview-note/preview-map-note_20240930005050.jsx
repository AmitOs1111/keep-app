import React, { useState, useCallback, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import markerIcon from '../../assets/img/map-marker-icon.png'

export function PreviewMapNote({ editContentNote, note }) {
  const [markers, setMarkers] = useState(note.info.markers)
  const [center, setCenter] = useState(note.info.markers[0])

  const containerStyle = {
    width: '100%',
    height: '500px',
  }

  return (
    <section className="preview-map-note">
      <LoadScript googleMapsApiKey="AIzaSyBdBa5bMkWEEvXTCe_AslF9uSJF9xajK2s">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          //   onClick={handleMapClick} // Trigger when user clicks on the map
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
              icon={
                window.google // Ensure google is available
                  ? {
                      url: markerIcon,
                      scaledSize: new window.google.maps.Size(40, 40),
                    }
                  : undefined
              }
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </section>
  )
}
