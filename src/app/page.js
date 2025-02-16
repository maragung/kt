'use client';

import { useState } from 'react';

export default function WebLoader() {
  const [url, setUrl] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [iframeKeys, setIframeKeys] = useState([0, 1, 2, 3, 4]); // Keys for forcing reload

  const handleGo = () => {
    if (url) {
      setIframeKeys(prevKeys => prevKeys.map(key => key + 5)); // Force reload by changing keys
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
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
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-gray-300 p-2 space-x-2">
        {iframeKeys.map((key, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-white'} rounded-md`}
            onClick={() => setActiveTab(index)}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>

      {/* Iframe Section */}
      <div className="flex-grow w-full h-full">
        {url && iframeKeys.map((key, index) => (
          activeTab === index && (
            <iframe
              key={key}
              src={url}
              className="w-full h-full border-none"
              title={`Loaded Page ${key}`}
            ></iframe>
          )
        ))}
      </div>
    </div>
  );
}
