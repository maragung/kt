'use client';

import { useState } from 'react';

export default function DualWebLoader() {
  const [url, setUrl] = useState('');
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
      <div className="p-4 bg-gray-200 flex items-center gap-4 w-full" style={{ height: '10%' }}>
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
        <span className="text-lg font-semibold">Count: {count}</span>
      </div>

      {/* Iframes Section */}
      <div className="flex flex-grow overflow-auto" style={{ height: '90%' }}>
        <div className="w-1/2 border-r border-gray-300">
          {url && (
            <iframe
              key={iframeKey}
              src={url}
              className="w-full h-full border-none overflow-auto"
              title="Left Loaded Page"
            ></iframe>
          )}
        </div>
        <div className="w-1/2">
          {url && (
            <iframe
              key={iframeKey + 1}
              src={url}
              className="w-full h-full border-none overflow-auto"
              title="Right Loaded Page"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
