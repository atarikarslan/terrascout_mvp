// src/components/MapView.js
'use client'
import { useEffect, useRef } from 'react'

export default function MapView({ onLocationSelect }) {
  const mapRef = useRef(null);

  useEffect(() => {
    // Map initialization will go here
    // We'll add this in the next step
  }, []);

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div 
        ref={mapRef}
        className="w-full h-[600px] rounded-lg"
      >
        {/* Map will render here */}
      </div>
    </div>
  )
}