// src/components/MapView.js
import * as L from 'leaflet';
import { useEffect, useRef } from 'react';

const MapView = ({ selectedLocation, onLocationSelect, sampleLocations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const map = L.map(mapRef.current).setView([52.52, 13.405], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      sampleLocations.forEach((location) => {
        L.marker([location.lat, location.lng])
          .addTo(map)
          .bindPopup(`
            <h3>${location.name}</h3>
            <p>Foot Traffic: ${location.footTraffic}</p>
            <p>Competitors: ${location.competitors}</p>
            <p>Demographics: ${location.demographics}</p>
          `);
      });

      return () => {
        map.remove();
      };
    }
  }, [sampleLocations]);

  return (
    <div ref={mapRef} className="h-[600px] rounded-lg" />
  );
};

export default MapView;