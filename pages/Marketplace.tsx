import React, { useState, useMemo } from 'react';
import { MOCK_MODELS, PROGRAMMING_LANGUAGES, ICONS } from '../constants';
import { Model } from '../types';

type SortOption = 'perf_desc' | 'price_asc' | 'price_desc';

const SORT_OPTIONS: { key: SortOption; label: string }[] = [
    { key: 'perf_desc', label: 'Leistung: Hoch zu niedrig' },
    { key: 'price_asc', label: 'Preis: Niedrig zu hoch' },
    { key: 'price_desc', label: 'Preis: Hoch zu niedrig' },
];

const ModelCard: React.FC<{ model: Model }> = ({ model }) => (
  <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
    <img src={model.imageUrl} alt={model.name} className="w-full h-48 object-cover" />
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-bold text-lg text-white">{model.name}</h3>
      <p className="text-sm text-gray-400 mb-4">by {model.author}</p>
      
      <div className="flex justify-between items-center text-sm mb-4">
        <span className="font-semibold text-gray-300">Performance</span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
          {model.performance}%
        </span>
      </div>
      <div className="flex justify-between items-center text-sm mb-4">
        <span className="font-semibold text-gray-300">Sprache</span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-500/10 text-gray-300 border border-gray-500/30">
          {model.language}
        </span>
      </div>
      <div className="mt-auto pt-4 flex justify-between items-center">
        <p className="text-xl font-bold text-yellow-400">{model.price} <span className="text-sm font-normal text-gray-400">BKG</span></p>
        <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
          Kaufen
        </button>
      </div>
    </div>
  </div>
);

const Marketplace: React.FC = () => {
    const [languageFilter, setLanguageFilter] = useState('all');
    const [sortOption, setSortOption] = useState<SortOption>('perf_desc');

    const displayModels = useMemo(() => {
        let models = [...MOCK_MODELS];

        if (languageFilter !== 'all') {
            models = models.filter(m => m.language === languageFilter);
        }

        models.sort((a, b) => {
            switch (sortOption) {
                case 'price_asc': return a.price - b.price;
                case 'price_desc': return b.price - a.price;
                case 'perf_desc':
                default:
                    return b.performance - a.performance;
            }
        });

        return models;
    }, [languageFilter, sortOption]);


  return (
    <div className="p-8">
      <p className="text-gray-400 mb-6 max-w-2xl">Hier können Modelle gehandelt werden. Nutzer können ihre Modelle anbieten, Coin-Angebote sehen und die besten Modelle kaufen oder tauschen.</p>
      
      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 mb-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
              <div className="text-gray-400">{ICONS.filter}</div>
              <label htmlFor="languageFilter" className="text-sm font-medium text-gray-300 sr-only">Sprache filtern</label>
              <select 
                id="languageFilter"
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="bg-gray-700/50 border border-gray-600 rounded-md py-2 pl-3 pr-8 text-sm text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                <option value="all">Alle Sprachen</option>
                {PROGRAMMING_LANGUAGES.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-300">Sortieren nach:</span>
            <div className="bg-gray-700/50 p-1 rounded-lg flex space-x-1">
                {SORT_OPTIONS.map(({key, label}) => (
                    <button
                        key={key}
                        onClick={() => setSortOption(key)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                            sortOption === key 
                            ? 'bg-purple-600 text-white' 
                            : 'text-gray-300 hover:bg-gray-600'
                        }`}
                        aria-label={label}
                    >
                       {label}
                    </button>
                ))}
            </div>
          </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayModels.map(model => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
       {displayModels.length === 0 && (
          <div className="col-span-full text-center py-16 bg-gray-800/50 rounded-lg border border-dashed border-gray-700/50">
              <h3 className="text-xl font-semibold text-white">Keine Modelle gefunden</h3>
              <p className="text-gray-400 mt-2">Versuchen Sie, Ihre Filterauswahl zu ändern.</p>
          </div>
      )}
    </div>
  );
};

export default Marketplace;