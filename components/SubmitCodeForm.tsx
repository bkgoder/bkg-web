import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ICONS } from '../constants';

type Tab = 'paste' | 'upload';

const SubmitCodeForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('paste');
  const [code, setCode] = useState('');
  const [version, setVersion] = useState('');
  const [commitMessage, setCommitMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setCode(event.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      version,
      commitMessage,
      code,
    });
    // Reset form
    setCode('');
    setVersion('');
    setCommitMessage('');
    setFileName('');
  };

  const isSubmitDisabled = !code.trim() || !version.trim() || !commitMessage.trim();

  const tabClasses = (tabName: Tab) => 
    `px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
      activeTab === tabName 
      ? 'bg-purple-600 text-white' 
      : 'text-gray-300 hover:bg-gray-700'
    }`;

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
      <h3 className="text-xl font-bold text-white mb-4">Code zur Überprüfung einreichen</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="bg-gray-800 p-1 rounded-lg flex space-x-1">
            <button type="button" onClick={() => setActiveTab('paste')} className={tabClasses('paste')}>
              Code einfügen
            </button>
            <button type="button" onClick={() => setActiveTab('upload')} className={tabClasses('upload')}>
              Datei hochladen
            </button>
          </div>

          {activeTab === 'paste' ? (
            <textarea
              className="w-full h-40 bg-gray-900 border border-gray-600 rounded-md p-3 font-mono text-sm text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Fügen Sie hier Ihren Code ein..."
            />
          ) : (
            <div className="relative border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
              <input 
                type="file" 
                id="code-file-upload" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              <div className="text-gray-400">
                {ICONS.upload}
                <p className="mt-2 font-semibold text-purple-400">
                  {fileName ? 'Datei ausgewählt' : 'Klicken, um eine Datei hochzuladen'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                   {fileName || 'Oder ziehen Sie eine Datei per Drag & Drop'}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="version" className="block text-sm font-medium text-gray-300 mb-1">Version</label>
              <input
                type="text"
                id="version"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="z.B. v1.2.1"
              />
            </div>
             <div>
              <label htmlFor="commitMessage" className="block text-sm font-medium text-gray-300 mb-1">Commit-Nachricht</label>
              <input
                type="text"
                id="commitMessage"
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="z.B. Feature: Benutzerauthentifizierung hinzugefügt"
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="w-full mt-2 px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:bg-purple-800/50 disabled:cursor-not-allowed transition-colors"
          >
            Zur Überprüfung einreichen
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitCodeForm;