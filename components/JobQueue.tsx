import React from 'react';
import { Job, JobStatus } from '../types';
import { Link } from 'react-router-dom';

interface JobQueueProps {
  jobs: Job[];
}

const getStatusClasses = (status: JobStatus) => {
  switch (status) {
    case JobStatus.InProgress:
      return { bg: 'bg-blue-500/10', text: 'text-blue-300', progress: 'bg-blue-500' };
    case JobStatus.Completed:
      return { bg: 'bg-green-500/10', text: 'text-green-400', progress: 'bg-green-500' };
    case JobStatus.Failed:
      return { bg: 'bg-red-500/10', text: 'text-red-400', progress: 'bg-red-500' };
    case JobStatus.Queued:
    default:
      return { bg: 'bg-gray-500/10', text: 'text-gray-400', progress: 'bg-gray-500' };
  }
};

const JobRow: React.FC<{ job: Job }> = ({ job }) => {
  const statusClasses = getStatusClasses(job.status);

  return (
    <div className="bg-gray-800 p-4 rounded-lg transition-all hover:bg-gray-700/50">
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-white">{job.description}</p>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusClasses.bg} ${statusClasses.text}`}>
          {job.status}
        </span>
      </div>
      <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
        <span>Projekt: <Link to={`/projects/${job.projectId}`} className="text-purple-400 hover:underline">{job.projectName}</Link></span>
        <span>{job.submittedAt}</span>
      </div>
      {job.status === JobStatus.InProgress && (
        <div>
            <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div 
                    className={`${statusClasses.progress} h-1.5 rounded-full transition-all duration-300`} 
                    style={{ width: `${job.progress}%` }}
                ></div>
            </div>
        </div>
      )}
    </div>
  );
};

const JobQueue: React.FC<JobQueueProps> = ({ jobs }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
      <h3 className="text-xl font-bold text-white mb-4">Job-Warteschlange & Zuweisung</h3>
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {jobs.length > 0 ? jobs.map(job => (
          <JobRow key={job.id} job={job} />
        )) : (
          <p className="text-center text-gray-500 text-sm py-4">Die Job-Warteschlange ist leer.</p>
        )}
      </div>
    </div>
  );
};

export default JobQueue;
