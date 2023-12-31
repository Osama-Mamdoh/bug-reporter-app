import { Component } from '@angular/core';
import { BugSeverity } from '@shared/models';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  statisticsData = [
    {
      severity: BugSeverity.BLOCKER,
      background: 'bg-danger',
      count: 5
    },
    {
      severity: BugSeverity.CRITICAL,
      background: 'bg-warning',
      count: 10
    },
    {
      severity: BugSeverity.MAJOR,
      background: 'bg-primary',
      count: 15
    },
    {
      severity: BugSeverity.MEDIUM,
      background: 'bg-success',
      count: 20
    }
  ];

  // lineChartData: ChartDataSets[] = [
  //   { data: [10, 20, 30, 40, 50, 60], label: 'Created Bugs' }
  // ];
  // lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  // lineChartOptions: ChartOptions = {
  //   responsive: true
  // };
  // lineChartLegend = true;

  // barChartData: ChartDataSets[] = [
  //   { data: [15, 25, 35, 45, 55, 65], label: 'Critical' },
  //   { data: [20, 30, 40, 50, 60, 70], label: 'Major' },
  //   { data: [25, 35, 45, 55, 65, 75], label: 'Medium' }
  // ];
  // barChartLabels: Label[] = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // barChartOptions: ChartOptions = {
  //   responsive: true
  // };
  // barChartLegend = true;

  createBug() {
    // Functionality to create a bug
    console.log('Creating a bug...');
  }
}
