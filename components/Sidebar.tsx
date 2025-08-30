
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ICONS } from '../constants';

const navItems = [
  { path: '/', name: 'Dashboard', icon: ICONS.dashboard },
  { path: '/projects', name: 'Projekte', icon: ICONS.projects },
  { path: '/models', name: 'Modelle', icon: ICONS.models },
  { path: '/marketplace', name: 'Marketplace', icon: ICONS.marketplace },
  { path: '/leaderboard', name: 'Leaderboard', icon: ICONS.leaderboard },
  { path: '/governance', name: 'Governance', icon: ICONS.governance },
  { path: '/wallet', name: 'Wallet', icon: ICONS.wallet },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-700/50 flex flex-col p-4">
      <div className="flex items-center mb-10 px-2">
        <div className="bg-purple-600 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-wider">bkg-web</h1>
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-300 transition-all duration-200 hover:bg-gray-700/50 hover:text-white ${
                isActive ? 'bg-purple-600/20 text-purple-300' : ''
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto bg-gray-800/50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-400 mb-2">Projekt Einstellungen</p>
          <p className="text-xs text-gray-500 mb-3">Verwalten Sie Ihre API-Schlüssel und Projekteinstellungen.</p>
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Einstellungen
          </button>
      </div>
    </div>
  );
};

export default Sidebar;
