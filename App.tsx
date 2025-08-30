
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Models from './pages/Models';
import Marketplace from './pages/Marketplace';
import Leaderboard from './pages/Leaderboard';
import Governance from './pages/Governance';
import Wallet from './pages/Wallet';
import { MOCK_PROJECTS } from './constants';

const pageTitles: { [key: string]: string } = {
  '/': 'Dashboard',
  '/projects': 'Projekte',
  '/models': 'Modelle',
  '/marketplace': 'Marketplace',
  '/leaderboard': 'Leaderboard',
  '/governance': 'Governance',
  '/wallet': 'Wallet und Coin-Bereich',
};

const PageTitleUpdater: React.FC = () => {
    const location = useLocation();
    const [title, setTitle] = useState(pageTitles[location.pathname] || 'BKG-Web');

    useEffect(() => {
        const path = location.pathname;
        if (path.startsWith('/projects/')) {
            setTitle(pageTitles['/projects']);
        } else {
            setTitle(pageTitles[path] || 'BKG-Web');
        }
    }, [location.pathname]);

    return <Header title={title} />;
}

const App: React.FC = () => {
  const firstProjectId = MOCK_PROJECTS.length > 0 ? MOCK_PROJECTS[0].id : null;

  return (
    <HashRouter>
      <div className="flex h-screen bg-gray-900 text-gray-100 font-sans">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <PageTitleUpdater />
          <div className="flex-1 overflow-y-auto bg-gray-800/20">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route 
                path="/projects" 
                element={
                  firstProjectId 
                    ? <Navigate to={`/projects/${firstProjectId}`} replace /> 
                    : <Projects />
                } 
              />
              <Route path="/projects/:projectId" element={<Projects />} />
              <Route path="/models" element={<Models />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/wallet" element={<Wallet />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;