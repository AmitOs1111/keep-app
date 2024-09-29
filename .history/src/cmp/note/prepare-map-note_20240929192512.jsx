import React, { useState, useCallback } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export function PrepareMapNote() {
  const [markers, setMarkers] = useState([])

  // Handle map click to add a marker
  const handleMapClick = useCallback((event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }
    setMarkers((currentMarkers) => [...currentMarkers, newMarker])
  }, [])

  const containerStyle = {
    width: '100%',
    height: '500px',
  }

  const center = {
    lat: 51.505, // Default latitude
    lng: -0.09, // Default longitude
  }

  return (
    <section className="prepare-map-note">
      <LoadScript googleMapsApiKey="AIzaSyBdBa5bMkWEEvXTCe_AslF9uSJF9xajK2s">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleMapClick} // Trigger when user clicks on the map
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
        </GoogleMap>
      </LoadScript>
    </section>
  )
}
