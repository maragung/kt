'use client';

import { useState } from 'react';

export default function DualWebLoader() {
  const [url, setUrl] = useState('');
  const [numIframes, setNumIframes] = useState(2);
  const [iframeKey, setIframeKey] = useState(0);
  const [count, setCount] = useState(0);

  const handleGo = () => {
    if (url) {
      setIframeKey(prevKey => prevKey + 1);
    }
  };

  const handleSuccess = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header Section */}
      <div className="p-4 bg-gray-200 flex flex-wrap items-center gap-4 w-full">
        <label className="text-lg font-semibold">Iframes:</label>
        <input
          type="number"
          className="w-16 p-2 border rounded-md"
          min="1"
          value={numIframes}
          onChange={(e) => setNumIframes(Number(e.target.value))}
        />
        <label className="text-lg font-semibold">URL:</label>
        <input
          type="text"
          className="flex-1 p-2 border rounded-md"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleGo}>
          Go
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={handleSuccess}>
          +1
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">
          Count: {count}
        </button>
      </div>

      {/* Iframes Section */}
      <div className="flex flex-col sm:flex-row flex-grow overflow-auto">
        {Array.from({ length: numIframes }).map((_, index) => (
          <div key={index} className="flex-1 border-b sm:border-r border-gray-300">
            {url && (
              <iframe
                key={iframeKey + index}
                src={url}
                className="w-full h-full border-none overflow-auto"
                title={`Loaded Page ${index + 1}`}
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
