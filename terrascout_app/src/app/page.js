// src/app/page.js
'use client'
import { useState } from 'react'
import MapView from '/Users/tarikarslan/terrascout_mvp/terrascout_app/src/app/components/MapView.js';
import AnalysisPanel from '/Users/tarikarslan/terrascout_mvp/terrascout_app/src/app/components/AnalysisPanel.js';

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MapView 
        onLocationSelect={setSelectedLocation}
      />
      <AnalysisPanel 
        selectedLocation={selectedLocation}
      />
    </div>
  )
}
