
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ICONS, MOCK_PROJECTS, MOCK_SUBMISSIONS } from '../constants';
import { CodeSubmission, CodeSubmissionStatus, ProjectStatus } from '../types';
import CodeReviewer from '../components/CodeReviewer';
import SubmitCodeForm from '../components/SubmitCodeForm';
import ApiKeyManager from '../components/ApiKeyManager';

const getProjectStatusClasses = (status: ProjectStatus) => {
    switch (status) {
        case ProjectStatus.Active: return 'bg-green-500/10 text-green-400';
        case ProjectStatus.Inactive: return 'bg-gray-500/10 text-gray-400';
        case ProjectStatus.Validating: return 'bg-yellow-500/10 text-yellow-400';
        default: return 'bg-gray-500/10 text-gray-400';
    }
};

const getSubmissionStatusClasses = (status: CodeSubmissionStatus) => {
    switch (status) {
        case CodeSubmissionStatus.Approved: return 'bg-green-500/10 text-green-400';
        case CodeSubmissionStatus.Rejected: return 'bg-red-500/10 text-red-400';
        case CodeSubmissionStatus.Pending: return 'bg-yellow-500/10 text-yellow-400';
        default: return 'bg-gray-500/10 text-gray-400';
    }
};

const Projects: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    
    const project = useMemo(() => 
        MOCK_PROJECTS.find(p => p.id === projectId), 
        [projectId]
    );

    const [whitelistedAddresses, setWhitelistedAddresses] = useState<string[]>([
        '0x1234...abcd', '0x5678...efgh'
    ]);
    const [newAddress, setNewAddress] = useState('');

    const handleAddAddress = () => {
        if (newAddress && !whitelistedAddresses.includes(newAddress)) {
            setWhitelistedAddresses([...whitelistedAddresses, newAddress]);
            setNewAddress('');
        }
    };

    const handleRemoveAddress = (addressToRemove: string) => {
        setWhitelistedAddresses(whitelistedAddresses.filter(addr => addr !== addressToRemove));
    };

    if (!project) {
        return (
            <div className="p-8 flex items-center justify-center h-full">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Projekt nicht gefunden</h2>
                    <p className="text-gray-400">Das angeforderte Projekt konnte nicht gefunden werden oder es sind keine Projekte vorhanden.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white">{project.name}</h2>
                    <div className="flex items-center space-x-4 mt-2 text-gray-400">
                        <span>Sprache: {project.language}</span>
                        <span>Plattform: {project.platform}</span>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getProjectStatusClasses(project.status)}`}>{project.status}</span>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <button className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600">Governance verwalten</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <SubmitCodeForm />
                    <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden">
                        <div className="px-6 py-5">
                           <h3 className="text-xl font-bold text-white">Historie der Codeeinreichungen</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-900/40">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">Committer</th>
                                        <th scope="col" className="py-3 px-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">Hash</th>
                                        <th scope="col" className="py-3 px-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">Datum</th>
                                        <th scope="col" className="py-3 px-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700/50">
                                    {MOCK_SUBMISSIONS.map((sub: CodeSubmission) => (
                                        <tr key={sub.id} className="hover:bg-gray-700/30 transition-colors duration-150">
                                            <td className="py-4 px-6 text-gray-200">{sub.committer}</td>
                                            <td className="py-4 px-6 font-mono text-purple-300">{sub.hash.substring(0, 8)}...</td>
                                            <td className="py-4 px-6 text-gray-300">{sub.date}</td>
                                            <td className="py-4 px-6">
                                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getSubmissionStatusClasses(sub.status)}`}>{sub.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <CodeReviewer language={project.language.toLowerCase()} />
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                        <h3 className="text-xl font-bold text-white mb-4">LLM Hochladen</h3>
                        <p className="text-sm text-gray-400 mb-4">Laden Sie ein LLM hoch, das automatisch durch den Orchestrator zerlegt und optimiert wird.</p>
                        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                            <input type="file" id="file-upload" className="hidden" />
                            <label htmlFor="file-upload" className="cursor-pointer text-purple-400 font-semibold">
                                Datei auswählen
                            </label>
                            <p className="text-xs text-gray-500 mt-1">.bin, .gguf, .safetensors</p>
                        </div>
                        <button className="w-full mt-4 bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700">Hochladen & Validieren</button>
                    </div>
                    <ApiKeyManager />
                     <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                        <h3 className="text-xl font-bold text-white mb-4">Whitelist verwalten</h3>
                        <p className="text-sm text-gray-400 mb-4">Gewähren Sie Entwicklern Zugriff auf dieses Projekt.</p>
                        <div className="flex space-x-2 mb-4">
                           <input 
                                type="text" 
                                value={newAddress}
                                onChange={(e) => setNewAddress(e.target.value)}
                                placeholder="Entwickler-Adresse hinzufügen..." 
                                className="flex-grow bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                            />
                            <button onClick={handleAddAddress} className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600">Hinzufügen</button>
                        </div>
                        <div className="max-h-40 overflow-y-auto space-y-2 pr-2">
                           {whitelistedAddresses.map(addr => (
                               <div key={addr} className="flex justify-between items-center bg-gray-800 p-2 rounded-md">
                                   <span className="font-mono text-sm text-gray-300">{addr}</span>
                                   <button onClick={() => handleRemoveAddress(addr)} className="text-gray-500 hover:text-red-400">
                                     {ICONS.trash}
                                   </button>
                               </div>
                           ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;