// src/app/page.js
'use client'
import { useState } from 'react'
import MapView from './components/MapView';
import AnalysisPanel from './components/AnalysisPanel';

const sampleLocations = [
  {
    id: 1,
    name: 'Prenzlauer Berg',
    lat: 52.5353,
    lng: 13.4092,
    footTraffic: 15000,
    competitors: 12,
    demographics: 'Young Professionals',
  },
  // Add more sample locations
];

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MapView
        selectedLocation={selectedLocation}
        onLocationSelect={setSelectedLocation}
        sampleLocations={sampleLocations}
      />
      <AnalysisPanel selectedLocation={selectedLocation} />
    </div>
  );
}
// In this example, we have a Home component that renders a MapView and an AnalysisPanel component side by side. The MapView component displays a map with sample location markers, and the AnalysisPanel component shows the details of the selected location.
