import React, { useState } from 'react';
import { ApiKey } from '../types';
import { ICONS } from '../constants';

const generateApiKey = (): string => {
  const prefix = 'bkg_';
  const randomPart = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return prefix + randomPart;
};

const ApiKeyManager: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: 'key-1',
      key: generateApiKey(),
      createdDate: new Date(Date.now() - 86400000 * 3).toLocaleDateString(), // 3 days ago
    },
  ]);
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);

  const handleGenerateKey = () => {
    const newKey: ApiKey = {
      id: `key-${Date.now()}`,
      key: generateApiKey(),
      createdDate: new Date().toLocaleDateString(),
    };
    setApiKeys(prevKeys => [newKey, ...prevKeys]);
  };

  const handleCopyKey = (key: string, id: string) => {
    navigator.clipboard.writeText(key).then(() => {
      setCopiedKeyId(id);
      setTimeout(() => setCopiedKeyId(null), 2000);
    });
  };

  const handleDeleteKey = (id: string) => {
    setApiKeys(prevKeys => prevKeys.filter(key => key.id !== id));
  };

  const maskKey = (key: string) => {
    return `${key.substring(0, 8)}...${key.substring(key.length - 4)}`;
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">API-Schlüssel</h3>
        <button
          onClick={handleGenerateKey}
          className="flex items-center space-x-2 bg-purple-600 text-white font-semibold py-2 px-3 rounded-lg hover:bg-purple-700 transition-colors text-sm"
        >
          {ICONS.plus}
          <span>Neuer Schlüssel</span>
        </button>
      </div>
      <p className="text-sm text-gray-400 mb-4">Verwalten Sie API-Schlüssel, um programmatischen Zugriff auf Ihr Projekt zu ermöglichen.</p>
      <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
        {apiKeys.length > 0 ? apiKeys.map(apiKey => (
          <div key={apiKey.id} className="bg-gray-800 p-3 rounded-lg flex items-center justify-between">
            <div>
              <p className="font-mono text-sm text-gray-200">{maskKey(apiKey.key)}</p>
              <p className="text-xs text-gray-500 mt-1">Erstellt am {apiKey.createdDate}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleCopyKey(apiKey.key, apiKey.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                  copiedKeyId === apiKey.id
                    ? 'bg-green-600/20 text-green-300'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {copiedKeyId === apiKey.id ? (
                   <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Kopiert!</span>
                   </>
                ) : (
                  <>
                    {React.cloneElement(ICONS.copy, { className: "h-4 w-4" })}
                    <span>Kopieren</span>
                  </>
                )}
              </button>
              <button onClick={() => handleDeleteKey(apiKey.id)} className="p-1.5 text-gray-500 hover:text-red-400 rounded-md hover:bg-gray-700 transition-colors">
                {ICONS.trash}
              </button>
            </div>
          </div>
        )) : (
          <p className="text-center text-gray-500 text-sm py-4">Keine API-Schlüssel generiert.</p>
        )}
      </div>
    </div>
  );
};

export default ApiKeyManager;
