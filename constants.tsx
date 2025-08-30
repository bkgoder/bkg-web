import { Project, ProjectStatus, Model, LeaderboardEntry, CodeSubmission, CodeSubmissionStatus, Transaction, Notification, NotificationType, Proposal, ProposalStatus } from './types';
import React from 'react';

export const MOCK_PROJECTS: Project[] = [
  { id: 'proj-001', name: 'Decentralized Finance AI', status: ProjectStatus.Active, language: 'Python', platform: 'Ethereum', activeProcesses: 3, lastUpdate: '2024-07-29' },
  { id: 'proj-002', name: 'Supply Chain Optimizer', status: ProjectStatus.Active, language: 'Go', platform: 'Hyperledger', activeProcesses: 1, lastUpdate: '2024-07-28' },
  { id: 'proj-003', name: 'GameFi LLM Core', status: ProjectStatus.Validating, language: 'Rust', platform: 'Solana', activeProcesses: 5, lastUpdate: '2024-07-29' },
  { id: 'proj-004', name: 'Healthcare Data Analysis', status: ProjectStatus.Inactive, language: 'R', platform: 'Private Cloud', activeProcesses: 0, lastUpdate: '2024-06-15' },
];

export const MOCK_MODELS: Model[] = [
    { id: 'model-1', name: 'Zephyr-12B-Optimizer', author: 'QuantumLeap AI', performance: 98.2, price: 1500, imageUrl: 'https://picsum.photos/seed/model1/400', language: 'Python' },
    { id: 'model-2', name: 'CodeLlama-70B-FineTuned', author: 'DevGenius', performance: 97.5, price: 2200, imageUrl: 'https://picsum.photos/seed/model2/400', language: 'Python' },
    { id: 'model-3', name: 'Stable-Coder-Alpha', author: 'CodeWeavers', performance: 95.1, price: 950, imageUrl: 'https://picsum.photos/seed/model3/400', language: 'Go' },
    { id: 'model-4', name: 'Vulcan-Secure-Checker', author: 'ChainGuard', performance: 99.8, price: 3500, imageUrl: 'https://picsum.photos/seed/model4/400', language: 'Rust' },
    { id: 'model-5', name: 'R-Analytica-Pro', author: 'Data Insights', performance: 94.3, price: 1200, imageUrl: 'https://picsum.photos/seed/model5/400', language: 'R' },
    { id: 'model-6', name: 'JS-DOM-Master', author: 'WebWizards', performance: 96.0, price: 1100, imageUrl: 'https://picsum.photos/seed/model6/400', language: 'JavaScript' },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
    { rank: 1, modelName: 'Vulcan-Secure-Checker', contributor: 'ChainGuard', score: 10240, change: 1 },
    { rank: 2, modelName: 'Zephyr-12B-Optimizer', contributor: 'QuantumLeap AI', score: 9870, change: -1 },
    { rank: 3, modelName: 'CodeLlama-70B-FineTuned', contributor: 'DevGenius', score: 9550, change: 0 },
    { rank: 4, modelName: 'Orion-Code-Scribe', contributor: 'SyntaxNet', score: 8900, change: 2 },
    { rank: 5, modelName: 'Stable-Coder-Alpha', contributor: 'CodeWeavers', score: 8750, change: 0 },
];

export const MOCK_SUBMISSIONS: CodeSubmission[] = [
    { id: 'sub-1', committer: 'Alice', hash: 'a1b2c3d4', date: '2024-07-29', status: CodeSubmissionStatus.Approved },
    { id: 'sub-2', committer: 'Bob', hash: 'e5f6g7h8', date: '2024-07-28', status: CodeSubmissionStatus.Approved },
    { id: 'sub-3', committer: 'Charlie', hash: 'i9j0k1l2', date: '2024-07-28', status: CodeSubmissionStatus.Rejected },
    { id: 'sub-4', committer: 'Alice', hash: 'm3n4o5p6', date: '2024-07-27', status: CodeSubmissionStatus.Pending },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    { id: 'txn-1', type: 'Earn', description: 'Contribution to Zephyr-12B', amount: 50, date: '2024-07-29' },
    { id: 'txn-2', type: 'Spend', description: 'API Key Purchase (Project X)', amount: -15, date: '2024-07-28' },
    { id: 'txn-3', type: 'Earn', description: 'Leaderboard Bonus - Rank #2', amount: 100, date: '2024-07-27' },
    { id: 'txn-4', type: 'Spend', description: 'Start New Project Fee', amount: -25, date: '2024-07-26' },
    { id: 'txn-5', type: 'Transfer', description: 'Sent to @DevGenius', amount: -75, date: '2024-07-25' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: 'notif-1', type: NotificationType.CodeReview, title: 'Code Review Abgeschlossen', message: 'Ihre Einreichung #a1b2c3d4 wurde genehmigt.', timestamp: 'vor 5 Minuten', read: false },
  { id: 'notif-2', type: NotificationType.Governance, title: 'Neuer Governance-Vorschlag', message: 'Vorschlag #042: Aktualisierung der Staking-Belohnungen.', timestamp: 'vor 2 Stunden', read: false },
  { id: 'notif-3', type: NotificationType.Wallet, title: 'Niedriger BKG-Saldo', message: 'Ihr Guthaben ist unter 10 BKG gefallen.', timestamp: 'vor 1 Tag', read: false },
  { id: 'notif-4', type: NotificationType.System, title: 'Systemwartung geplant', message: 'Geplante Wartung am 30.07. um 02:00 UTC.', timestamp: 'vor 2 Tagen', read: true },
];

export const MOCK_PROPOSALS: Proposal[] = [
  { id: 'prop-1', title: 'Q3 Treasury Grant for Core Devs', proposer: '0x1234...abcd', status: ProposalStatus.Active, votesFor: 12500, votesAgainst: 3400, endDate: '2024-08-05' },
  { id: 'prop-2', title: 'Integrate New LLM Validator Module', proposer: '0x5678...efgh', status: ProposalStatus.Passed, votesFor: 25000, votesAgainst: 1200, endDate: '2024-07-20' },
  { id: 'prop-3', title: 'Reduce Project Creation Fee to 15 BKG', proposer: '0x9abc...deff', status: ProposalStatus.Rejected, votesFor: 8000, votesAgainst: 15000, endDate: '2024-07-15' },
  { id: 'prop-4', title: 'Update Staking Rewards Distribution', proposer: '0x1234...abcd', status: ProposalStatus.Executed, votesFor: 32000, votesAgainst: 500, endDate: '2024-06-30' },
];

export const PROGRAMMING_LANGUAGES = ['Python', 'Go', 'Rust', 'R', 'JavaScript', 'TypeScript'];
export const TARGET_PLATFORMS = ['Ethereum', 'Hyperledger', 'Solana', 'Private Cloud', 'Web', 'Mobile'];

export const ICONS = {
    dashboard: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    projects: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    models: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    marketplace: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    leaderboard: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    governance: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0-4.418-4.03-8-9-8s-9 3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>,
    wallet: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    coin: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" /></svg>,
    bell: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    checkCircle: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    governance_notif: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    wallet_notif: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01M12 14c-1.11 0-2.08-.402-2.599-1M12 14v1m0-1v-.01M12 16v1m0 1v1m0-2.01" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01M12 14c-1.11 0-2.08-.402-2.599-1M12 14v1m0-1v-.01M12 16v1m0 1v1m0-2.01M5.75 12a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0z" /></svg>,
    system_notif: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    x: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
    trash: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
    upload: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>,
    filter: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>,
    copy: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    plus: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
};