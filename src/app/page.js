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

  const handleNumIframesChange = (e) => {
    setNumIframes(Number(e.target.value));
    setCount(0); // Reset count when number of iframes changes
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setCount(0); // Reset count when URL changes
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
          onChange={handleNumIframesChange}
        />
        <label className="text-lg font-semibold">URL:</label>
        <input
          type="text"
          className="flex-1 p-2 border rounded-md"
          placeholder="Enter URL"
          value={url}
          onChange={handleUrlChange}
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
      <div className="flex flex-col sm:flex-row flex-grow overflow-y-auto sm:overflow-hidden">
        {Array.from({ length: numIframes }).map((_, index) => (
          <div key={index} className="flex-1 border-b sm:border-r border-gray-300 h-screen sm:h-full">
            {url && (
              <iframe
                key={iframeKey + index}
                src={`/api/proxy?url=${encodeURIComponent(url)}`}
                className="w-full h-full border-none overflow-auto"
                title={`Loaded Page ${index + 1}`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
