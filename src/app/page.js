'use client';

import { useState } from 'react';

export default function WebLoader() {
  const [url, setUrl] = useState('');
  const [iframeKeys, setIframeKeys] = useState([]);

  const handleGo = () => {
    if (url) {
      setIframeKeys(Array.from({ length: 5 }, (_, i) => `${url}-${Date.now()}-${i}`));
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setIframeKeys([]);
  };

  return (
    <div className="flex flex-col h-screen w-full p-4">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-4">
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
      </div>

      {/* Iframe Section */}
      <div className="flex flex-col gap-2 overflow-auto">
        {iframeKeys.map((key, index) => (
          <iframe
            key={key}
            src={url}
            className="w-full h-screen border rounded-md"
            title={`Loaded Page ${index + 1}`}
          ></iframe>
        ))}
      </div>
    </div>
  );
}
