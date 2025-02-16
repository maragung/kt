'use client';

import { useState } from 'react';

export default function WebLoader() {
  const [url, setUrl] = useState('');
  const [iframeUrl, setIframeUrl] = useState('');
  const [count, setCount] = useState(0);

  const handleGo = () => {
    if (url) {
      setIframeUrl(url);
      setCount(prev => prev + 1);
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setCount(0);
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
          onChange={handleUrlChange}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleGo}
        >
          Go
        </button>
        <span className="text-lg font-semibold">Count: {count}</span>
      </div>

      {/* Iframe Section */}
      <div className="flex-grow" style={{ height: '90%' }}>
        {iframeUrl && (
          <iframe
            src={iframeUrl}
            className="w-full h-full border-none"
            title="Loaded Page"
          ></iframe>
        )}
      </div>
    </div>
  );
}
