import React, { useState, useCallback, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import markerIcon from '../../assets/img/keep.logo.png'

export function PrepareMapNote() {
  const [markers, setMarkers] = useState([])
  const [canter, setCenter] = useState({
    lat: 51.505,
    lng: -0.09,
  })

  useEffect(() => {}, [markers])
  // Handle map click to add a marker
  const handleMapClick = useCallback((event) => {
    console.log('clicke on map:')
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }

    setMarkers((currentMarkers) => [newMarker, ...currentMarkers])
  }, [])

  const containerStyle = {
    width: '100%',
    height: '500px',
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
