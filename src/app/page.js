'use client';

import { useState } from 'react';

export default function WebLoader() {
  const [url, setUrl] = useState('');
  const [iframeKeys, setIframeKeys] = useState([0, 1, 2, 3, 4]); // Keys for forcing reload
  const [count, setCount] = useState(0);

  const handleGo = () => {
    if (url) {
      setIframeKeys(prevKeys => prevKeys.map(key => key + 5)); // Force reload by changing keys
    }
  };

  const handleSuccess = () => {
    setCount(prev => prev + 1);
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
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={handleSuccess}
        >
          +Success
        </button>
        <span className="text-lg font-semibold">Count: {count}</span>
      </div>

      {/* Iframe Section */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-auto" style={{ height: '90%' }}>
        {url && iframeKeys.map(key => (
          <iframe
            key={key}
            src={url}
            className="w-full h-full border rounded-md"
            title={`Loaded Page ${key}`}
          ></iframe>
        ))}
      </div>
    </div>
  );
}
