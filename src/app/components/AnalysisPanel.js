// src/components/AnalysisPanel.js
export default function AnalysisPanel({ selectedLocation }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Location Analysis</h2>
        {selectedLocation ? (
          <div>
            <h3 className="text-xl mb-2">{selectedLocation.name}</h3>
            <div className="grid gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold">Foot Traffic</h4>
                <p className="text-2xl">Coming soon...</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold">Demographics</h4>
                <p className="text-2xl">Coming soon...</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold">Competition</h4>
                <p className="text-2xl">Coming soon...</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select a location on the map to see analysis</p>
        )}
      </div>
    )
  }