import React, { useState, useCallback, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import markerIcon from '../../assets/img/map-marker-icon.png'

export function PreviewMapNote({ editContentNote, note }) {
  const [markers, setMarkers] = useState(note.info.map || [])
  const [center, setCenter] = useState({
    lat: 32.0853,
    lng: 34.7818,
  })

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
              icon={{
                url: markerIcon, // Path to your custom marker icon
                scaledSize: new window.google.maps.Size(40, 40), // Scale the icon
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </section>
  )
}
