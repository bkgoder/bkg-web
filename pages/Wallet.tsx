
import React from 'react';
import { MOCK_TRANSACTIONS, ICONS } from '../constants';
import { Transaction } from '../types';

const TransactionRow: React.FC<{ tx: Transaction }> = ({ tx }) => {
    const isCredit = tx.amount > 0;
    return (
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${isCredit ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                    {isCredit ? 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg> : 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
                    }
                </div>
                <div>
                    <p className="font-semibold text-white">{tx.description}</p>
                    <p className="text-sm text-gray-400">{tx.date}</p>
                </div>
            </div>
            <p className={`font-bold text-lg ${isCredit ? 'text-green-400' : 'text-red-400'}`}>
                {isCredit ? '+' : ''}{tx.amount.toFixed(2)} BKG
            </p>
        </div>
    );
}

const Wallet: React.FC = () => {
    return (
        <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 text-center">
                        <h3 className="text-gray-400 font-semibold mb-2">Gesamtsaldo</h3>
                        <div className="flex items-center justify-center space-x-3 text-4xl font-bold text-yellow-400 mb-6">
                            <span>1,250.75 BKG</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-colors">Senden</button>
                            <button className="w-full bg-gray-700 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition-colors">Empfangen</button>
                        </div>
                    </div>
                     <div className="mt-6 bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                        <h3 className="text-xl font-bold text-white mb-4">Coins verwenden</h3>
                        <div className="space-y-3">
                            <button className="w-full text-left bg-gray-800 p-3 rounded-lg hover:bg-gray-700/50">API-Schlüssel kaufen</button>
                            <button className="w-full text-left bg-gray-800 p-3 rounded-lg hover:bg-gray-700/50">Neues Projekt starten</button>
                            <button className="w-full text-left bg-gray-800 p-3 rounded-lg hover:bg-gray-700/50">Für LLM-Nutzung zahlen</button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                        <h3 className="text-xl font-bold text-white mb-4">Letzte Transaktionen</h3>
                        <div className="space-y-4">
                            {MOCK_TRANSACTIONS.map(tx => (
                                <TransactionRow key={tx.id} tx={tx} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
