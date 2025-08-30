import React from 'react';
import { Project, ProjectStatus } from '../types';

interface ProjectStatusChartProps {
  projects: Project[];
}

interface StatusConfig {
  color: string;
  name: string;
}

const STATUS_CONFIG: Record<ProjectStatus, StatusConfig> = {
  [ProjectStatus.Active]: { color: 'text-green-400', name: 'Aktiv' },
  [ProjectStatus.Validating]: { color: 'text-yellow-400', name: 'Validierung' },
  [ProjectStatus.Inactive]: { color: 'text-gray-400', name: 'Inaktiv' },
};

const DonutSegment: React.FC<{
  radius: number;
  strokeWidth: number;
  percentage: number;
  offset: number;
  colorClass: string;
}> = ({ radius, strokeWidth, percentage, offset, colorClass }) => {
  const circumference = 2 * Math.PI * radius;
  if (percentage <= 0) return null;
  
  const cappedPercentage = Math.min(percentage, 99.999);
  
  const strokeDasharray = `${(cappedPercentage / 100) * circumference} ${circumference}`;
  const transform = `rotate(${-90 + offset * 3.6} 50 50)`;

  return (
    <circle
      className={`transition-all duration-500 ${colorClass}`}
      cx="50"
      cy="50"
      r={radius}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeLinecap="round"
      fill="transparent"
      transform={transform}
      stroke="currentColor"
    />
  );
};

const ProjectStatusChart: React.FC<ProjectStatusChartProps> = ({ projects }) => {
  const totalProjects = projects.length;

  if (totalProjects === 0) {
    return (
       <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 h-full flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Projektstatus</h3>
            <p className="text-gray-400">Keine Projekte zum Anzeigen vorhanden.</p>
          </div>
       </div>
    );
  }

  const statusCounts = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {} as Record<ProjectStatus, number>);

  const chartData = (Object.keys(STATUS_CONFIG) as ProjectStatus[]).map(status => ({
    status,
    count: statusCounts[status] || 0,
    percentage: ((statusCounts[status] || 0) / totalProjects) * 100,
  })).filter(d => d.count > 0);

  let cumulativeOffset = 0;

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 h-full">
      <h3 className="text-xl font-bold text-white mb-4">Projektstatus</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
        <div className="relative w-40 h-40 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" strokeWidth="12" className="text-gray-700/50" stroke="currentColor" fill="transparent" />
            {chartData.map(({ status, percentage }) => {
              const offset = cumulativeOffset;
              cumulativeOffset += percentage;
              return (
                <DonutSegment
                  key={status}
                  radius={40}
                  strokeWidth={12}
                  percentage={percentage}
                  offset={offset}
                  colorClass={STATUS_CONFIG[status].color}
                />
              );
            })}
          </svg>
           <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">{totalProjects}</span>
            <span className="text-sm text-gray-400">Projekte</span>
          </div>
        </div>
        <div className="space-y-3 w-full max-w-xs">
          {chartData.map(({ status, count }) => (
            <div key={status} className="flex items-center text-sm">
              <span className={`w-3 h-3 rounded-full mr-3 flex-shrink-0 ${STATUS_CONFIG[status].color.replace('text-', 'bg-')}`}></span>
              <span className="text-gray-300 font-medium">{STATUS_CONFIG[status].name}</span>
              <span className="ml-auto text-white font-semibold">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStatusChart;