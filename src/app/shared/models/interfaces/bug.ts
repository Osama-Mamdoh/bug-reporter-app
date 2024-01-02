import { Releases, BugSeverity } from '..';

export interface Bug {
  id: number;
  title: string;
  severity: BugSeverity;
  release: Releases;
  link: string;
  description: string;
  stackTrace: string;
  createdBy: string;
  createdAt: Date;
}
