
import React from 'react';

const Models: React.FC = () => {
    return (
        <div className="p-8">
            <div className="bg-gray-800/50 rounded-lg p-10 border border-gray-700/50 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Modellverwaltung</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Hier können Sie Ihre hochgeladenen LLMs verwalten, deren Validierungsstatus einsehen und sie für Projekte oder den Marketplace freigeben.
                    Jedes Modell durchläuft einen automatischen Optimierungsprozess durch den Orchestrator, um die Effizienz im Netzwerk zu maximieren.
                </p>
                 <button className="mt-8 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                    Meine Modelle anzeigen
                </button>
            </div>
        </div>
    );
};

export default Models;
