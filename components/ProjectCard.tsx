
import React from 'react';
import { Link } from 'react-router-dom';
import { Project, ProjectStatus } from '../types';

interface ProjectCardProps {
  project: Project;
}

const getStatusClasses = (status: ProjectStatus) => {
  switch (status) {
    case ProjectStatus.Active:
      return 'bg-green-500/10 text-green-400 border-green-500/30';
    case ProjectStatus.Inactive:
      return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    case ProjectStatus.Validating:
      return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
    default:
      return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block bg-gray-800/50 rounded-lg p-5 border border-gray-700/50 hover:border-purple-500/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg text-white">{project.name}</h3>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusClasses(project.status)}`}>
            {project.status}
          </span>
        </div>
        <div className="space-y-2 text-sm text-gray-400">
          <p><span className="font-semibold text-gray-300">Sprache:</span> {project.language}</p>
          <p><span className="font-semibold text-gray-300">Plattform:</span> {project.platform}</p>
        </div>
        <div className="mt-auto pt-4 flex justify-between items-center text-sm">
          <div className="text-gray-400">
            <span className="font-semibold text-white">{project.activeProcesses}</span> laufende Prozesse
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;