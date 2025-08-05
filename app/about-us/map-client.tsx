"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Import marker images explicitly
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import markerRetina from "leaflet/dist/images/marker-icon-2x.png"

// Fix for Leaflet's default icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
})

export default function MapClient() {
  const locations = [
    { country: "India", position: [20.5937, 78.9629] },
    { country: "Hong Kong", position: [22.3193, 114.1694] },
    { country: "UAE", position: [23.4241, 53.8478] },
    { country: "Bahrain", position: [26.0667, 50.5577] },
    { country: "France", position: [46.6034, 1.8883] },
    { country: "Switzerland", position: [46.8182, 8.2275] },
    { country: "Turkey", position: [38.9637, 35.2433] },
    { country: "Malaysia", position: [4.2105, 101.9758] },
  ]

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={3} style={{ height: "100%" }} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc.position}>
          <Popup>{loc.country}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
