// src/components/MapView.js
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = ({ selectedLocation, onLocationSelect, sampleLocations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // This code will only run in the browser, not during server-side rendering
    if (typeof window !== 'undefined') {
      // Use the Leaflet library and mapRef to initialize the map
    }
  }, []);

  return (
    <MapContainer ref={mapRef} center={[52.52, 13.405]} zoom={13} className="h-[600px] rounded-lg">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Render sample location markers */}
      {sampleLocations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          eventHandlers={{
            click: () => onLocationSelect(location),
          }}
        >
          <Popup>
            <h3>{location.name}</h3>
            <p>Foot Traffic: {location.footTraffic}</p>
            <p>Competitors: {location.competitors}</p>
            <p>Demographics: {location.demographics}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;