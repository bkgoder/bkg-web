import React, { useState } from 'react';
import { MOCK_PROJECTS, MOCK_JOBS } from '../constants';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import CreateProjectModal from '../components/CreateProjectModal';
import ProjectStatusChart from '../components/ProjectStatusChart';
import JobQueue from '../components/JobQueue';

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProject = (projectData: { name: string; language: string; platform: string }) => {
    console.log('Creating new project:', projectData);
    // In a real app, you would add the new project to the state, e.g.:
    // const newProject: Project = { 
    //   id: `proj-${Date.now()}`,
    //   status: ProjectStatus.Validating,
    //   activeProcesses: 0,
    //   lastUpdate: new Date().toISOString().split('T')[0],
    //   ...projectData 
    // };
    // setProjects(prev => [newProject, ...prev]);
    setIsModalOpen(false);
  };


  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-200">Projektübersicht</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-purple-700 transition-colors">
            Neues Projekt erstellen
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <ProjectStatusChart projects={projects} />
          </div>
          <div className="lg:col-span-3">
            <JobQueue jobs={MOCK_JOBS} />
          </div>
        </div>
      </div>
      <CreateProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />
    </>
  );
};

export default Dashboard;