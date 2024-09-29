import React, { useState, useCallback } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export function PrepareMapNote() {
  const [markers, setMarkers] = useState([])

  // Handle map click to add a marker
  const handleMapClick = useCallback((event) => {
    console.log('clicke on map:')
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }
    console.log('newMarker:', newMarker)
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

  console.log('markers:', markers)
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
            <Marker
              key={index}
              position={marker}
              icon={{
                url: '⌘', // Path to your custom marker icon
                // url: 'path_to_custom_icon.png', // Path to your custom marker icon
                scaledSize: new window.google.maps.Size(40, 40), // Scale the icon
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </section>
  )
}
