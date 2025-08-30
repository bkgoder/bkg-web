import React, { useState, FormEvent } from 'react';
import { ICONS, PROGRAMMING_LANGUAGES, TARGET_PLATFORMS } from '../constants';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (projectData: { name: string; language: string; platform: string }) => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState(PROGRAMMING_LANGUAGES[0]);
  const [platform, setPlatform] = useState(TARGET_PLATFORMS[0]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return; 
    onCreate({ name, language, platform });
    setName('');
    setLanguage(PROGRAMMING_LANGUAGES[0]);
    setPlatform(TARGET_PLATFORMS[0]);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-lg border border-gray-700/50 m-4">
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Neues Projekt erstellen</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Modal schließen">
            {ICONS.x}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-5">
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-300 mb-2">
                Projektname
              </label>
              <input
                type="text"
                id="projectName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 rounded-md p-2.5 text-sm text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
                placeholder="z.B. Mein KI-Projekt"
              />
            </div>
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-2">
                Programmiersprache
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 rounded-md p-2.5 text-sm text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                {PROGRAMMING_LANGUAGES.map(lang => <option key={lang} value={lang}>{lang}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="platform" className="block text-sm font-medium text-gray-300 mb-2">
                Zielplattform
              </label>
              <select
                id="platform"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 rounded-md p-2.5 text-sm text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                {TARGET_PLATFORMS.map(plat => <option key={plat} value={plat}>{plat}</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-end items-center p-5 bg-gray-800/50 border-t border-gray-700 rounded-b-lg space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-800 disabled:cursor-not-allowed"
              disabled={!name.trim()}
            >
              Projekt erstellen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectModal;