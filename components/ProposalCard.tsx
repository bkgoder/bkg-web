import React from 'react';
import { Proposal, ProposalStatus } from '../types';

interface ProposalCardProps {
  proposal: Proposal;
}

const getStatusClasses = (status: ProposalStatus) => {
  switch (status) {
    case ProposalStatus.Active:
      return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
    case ProposalStatus.Passed:
    case ProposalStatus.Executed:
      return 'bg-green-500/10 text-green-400 border-green-500/30';
    case ProposalStatus.Rejected:
      return 'bg-red-500/10 text-red-400 border-red-500/30';
    default:
      return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
  }
};

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal }) => {
  const totalVotes = proposal.votesFor + proposal.votesAgainst;
  const forPercentage = totalVotes > 0 ? (proposal.votesFor / totalVotes) * 100 : 0;
  const againstPercentage = totalVotes > 0 ? (proposal.votesAgainst / totalVotes) * 100 : 0;

  return (
    <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700/50 flex flex-col justify-between hover:border-purple-500/50 transition-colors duration-300">
      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-white pr-4">{proposal.title}</h3>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border whitespace-nowrap ${getStatusClasses(proposal.status)}`}>
            {proposal.status}
          </span>
        </div>
        <p className="text-sm text-gray-400 mb-4">Vorgeschlagen von: <span className="font-mono text-purple-300">{proposal.proposer}</span></p>

        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-300 mb-1">
            <span>Dafür ({forPercentage.toFixed(1)}%)</span>
            <span>Dagegen ({againstPercentage.toFixed(1)}%)</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${forPercentage}%` }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>{proposal.votesFor.toLocaleString()} Stimmen</span>
            <span>{proposal.votesAgainst.toLocaleString()} Stimmen</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700/50">
        {proposal.status === ProposalStatus.Active ? (
          <div className="flex justify-between items-center">
             <p className="text-sm text-gray-400">Endet am: {proposal.endDate}</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-sm font-semibold bg-green-600/20 text-green-300 rounded-md hover:bg-green-600/40 transition-colors">Dafür</button>
              <button className="px-4 py-2 text-sm font-semibold bg-red-600/20 text-red-300 rounded-md hover:bg-red-600/40 transition-colors">Dagegen</button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-500 text-center">Abstimmung beendet am {proposal.endDate}</p>
        )}
      </div>
    </div>
  );
};

export default ProposalCard;
