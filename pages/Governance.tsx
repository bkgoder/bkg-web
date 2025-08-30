import React from 'react';
import { MOCK_PROPOSALS } from '../constants';
import ProposalCard from '../components/ProposalCard';

const Governance: React.FC = () => {
    return (
        <div className="p-8">
             <div className="flex justify-between items-center mb-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-white">Governance</h2>
                    <p className="text-gray-400 mt-2">
                        Nehmen Sie an der dezentralen Steuerung teil, indem Sie über Vorschläge abstimmen, die die Zukunft des bkg-web-Ökosystems gestalten.
                    </p>
                </div>
                <button className="bg-purple-600 text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap">
                    Neuen Vorschlag erstellen
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {MOCK_PROPOSALS.map(proposal => (
                    <ProposalCard key={proposal.id} proposal={proposal} />
                ))}
            </div>
        </div>
    );
};

export default Governance;
