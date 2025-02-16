'use client';

import { useState } from 'react';

export default function DualWebLoader() {
  const [url, setUrl] = useState('');
  const [numIframes, setNumIframes] = useState(2);
  const [count, setCount] = useState(0);

  const handleGo = () => {
    if (url) {
      window.open(url, "_blank");
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
    </div>
  );
}
