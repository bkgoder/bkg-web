
import React from 'react';
import { MOCK_LEADERBOARD } from '../constants';
import { LeaderboardEntry } from '../types';

const Leaderboard: React.FC = () => {
    const getChangeIcon = (change: number) => {
        if (change > 0) return <span className="text-green-400">▲</span>;
        if (change < 0) return <span className="text-red-400">▼</span>;
        return <span className="text-gray-500">-</span>;
    };

    return (
        <div className="p-8">
            <p className="text-gray-400 mb-6 max-w-2xl">Rangliste der besten LLMs basierend auf Performance, Codequalität und Beiträgen. Der Leaderboard-Status wird in Echtzeit aktualisiert.</p>
            <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="border-b border-gray-600 text-sm text-gray-400">
                        <tr>
                            <th className="py-4 px-6 font-semibold">Rang</th>
                            <th className="py-4 px-6 font-semibold">Modell</th>
                            <th className="py-4 px-6 font-semibold">Beitragender</th>
                            <th className="py-4 px-6 font-semibold">Score</th>
                            <th className="py-4 px-6 font-semibold text-center">Änderung</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_LEADERBOARD.map((entry: LeaderboardEntry) => (
                            <tr key={entry.rank} className="border-b border-gray-700/50 hover:bg-gray-800 transition-colors">
                                <td className="py-4 px-6 text-xl font-bold text-white">{entry.rank}</td>
                                <td className="py-4 px-6 font-semibold text-purple-300">{entry.modelName}</td>
                                <td className="py-4 px-6 text-gray-300">{entry.contributor}</td>
                                <td className="py-4 px-6 font-semibold text-yellow-400">{entry.score.toLocaleString()}</td>
                                <td className="py-4 px-6 text-center font-semibold">{getChangeIcon(entry.change)} {Math.abs(entry.change) > 0 ? Math.abs(entry.change) : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
