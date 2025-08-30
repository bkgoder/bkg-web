export enum ProjectStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Validating = 'Validating',
}

export enum CodeSubmissionStatus {
  Pending = 'Pending Review',
  Approved = 'Freigegeben',
  Rejected = 'Abgelehnt',
}

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  language: string;
  platform: string;
  activeProcesses: number;
  lastUpdate: string;
}

export interface CodeSubmission {
  id: string;
  committer: string;
  hash: string;
  date: string;
  status: CodeSubmissionStatus;
}

export interface Model {
  id: string;
  name: string;
  author: string;
  performance: number;
  price: number;
  imageUrl: string;
  language: string;
}

export interface LeaderboardEntry {
  rank: number;
  modelName: string;
  contributor: string;
  score: number;
  change: number;
}

export interface Transaction {
  id: string;
  type: 'Earn' | 'Spend' | 'Transfer';
  description: string;
  amount: number;
  date: string;
}

export enum NotificationType {
  CodeReview = 'CodeReview',
  Governance = 'Governance',
  Wallet = 'Wallet',
  System = 'System',
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export enum ProposalStatus {
  Active = 'Aktiv',
  Passed = 'Angenommen',
  Rejected = 'Abgelehnt',
  Executed = 'Ausgeführt',
}

export interface Proposal {
  id: string;
  title: string;
  proposer: string;
  status: ProposalStatus;
  votesFor: number;
  votesAgainst: number;
  endDate: string;
}

export interface ApiKey {
  id: string;
  key: string;
  createdDate: string;
}

export enum JobStatus {
  Queued = 'In Warteschlange',
  InProgress = 'In Bearbeitung',
  Completed = 'Abgeschlossen',
  Failed = 'Fehlgeschlagen',
}

export interface Job {
  id: string;
  description: string;
  projectId: string;
  projectName: string;
  status: JobStatus;
  submittedAt: string;
  progress: number;
}