// src/components/MapView.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = ({ selectedLocation, onLocationSelect, sampleLocations }) => {
  const center = [52.52, 13.405]; // Berlin coordinates

  return (
    <MapContainer center={center} zoom={13} className="h-[600px] rounded-lg">
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