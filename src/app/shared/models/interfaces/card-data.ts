import { BugSeverity } from '../enums/bug-severity';

export interface StatisticsCard {
  severity: BugSeverity;
  background: string;
  count: number;
}
