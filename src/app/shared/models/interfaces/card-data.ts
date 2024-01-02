import { BugSeverity } from '..';

export interface StatisticsCard {
  severity: BugSeverity;
  count: number;
}
