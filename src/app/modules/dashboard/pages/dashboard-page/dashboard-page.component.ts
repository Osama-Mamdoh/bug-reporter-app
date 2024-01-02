import { Component, OnInit } from '@angular/core';
import { Bug, BugSeverity, StatisticsCard } from '@shared/models';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BugService } from '@core/services';
import { MONTHS_LABELS } from '@shared/constants';
import * as helperFunctions from '@shared/helper-functions';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent implements OnInit {
  faChartLine = faChartLine;
  bugs: Bug[] = [];
  statisticsCards: StatisticsCard[] = [];
  public helpers = helperFunctions;
  public lineChartData: ChartConfiguration<'line'>['data'];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public lineChartLegend = true;
  public barChartData: ChartConfiguration<'bar'>['data'];
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor(private bugService: BugService) {}

  ngOnInit() {
    this.bugService.bugs$.subscribe((bugs) => {
      this.bugs = bugs;
      this.updateStatisticsCards();
      this.lineChartData = this.createLineChartData(bugs);
      this.barChartData = this.createBarChartData(bugs);
    });
  }

  updateStatisticsCards() {
    const countsBySeverity = this.bugs.reduce((counts, bug) => {
      counts[bug.severity] = (counts[bug.severity] || 0) + 1;
      return counts;
    }, {} as { [severity in BugSeverity]: number });

    this.statisticsCards = Object.entries(countsBySeverity)
      .map(([severity, count]) => ({
        severity: severity as BugSeverity,
        count,
      }))
      .filter(
        ({ severity }) =>
          severity !== BugSeverity.LOW && severity !== BugSeverity.MINOR
      );
  }

  /**
   *
   * Create the line chart data based on the bugs array.
   * @param bugs - An array of bug objects.
   * @returns Line chart data.
   */
  createLineChartData(bugs: Bug[]): ChartConfiguration<'line'>['data'] {
    const labels = MONTHS_LABELS;
    const datasets = [];

    const bugCountsByMonthAndYear = bugs.reduce((counts, bug) => {
      const year = bug.createdAt.getFullYear();
      const monthIndex = bug.createdAt.getMonth();
      counts[year] = counts[year] || Array(12).fill(0);
      counts[year][monthIndex] = (counts[year][monthIndex] || 0) + 1;
      return counts;
    }, {} as { [year: number]: number[] });

    for (const year in bugCountsByMonthAndYear) {
      datasets.push({
        data: bugCountsByMonthAndYear[year],
        label: year,
        fill: true,
      });
    }

    return { labels, datasets };
  }

  /**
   *
   * Create the bar chart data based on the bugs array.
   * @param bugs - An array of bug objects.
   * @returns Bar chart data.
   */
  createBarChartData(bugs: any[]): ChartConfiguration<'bar'>['data'] {
    const today = new Date();
    const lastSixMonths = Array.from(
      { length: 6 },
      (_, i) => today.getMonth() - i
    ).map((month) =>
      new Date(Date.UTC(today.getFullYear(), month, 1)).toLocaleDateString(
        'en-US',
        { month: 'short' }
      )
    );
    const bugCountsBySeverityAndMonth = bugs
      .filter(
        (bug) =>
          bug.createdAt >=
          new Date(Date.UTC(today.getFullYear(), today.getMonth() - 5))
      )
      .reduce((counts, bug) => {
        const monthIndex = lastSixMonths.indexOf(
          bug.createdAt.toLocaleDateString('en-US', { month: 'short' })
        );

        if (
          [
            BugSeverity.BLOCKER,
            BugSeverity.CRITICAL,
            BugSeverity.MAJOR,
          ].includes(bug.severity)
        ) {
          counts[bug.severity] = counts[bug.severity] || Array(6).fill(0);

          if (monthIndex !== -1) {
            counts[bug.severity][monthIndex] =
              (counts[bug.severity][monthIndex] || 0) + 1;
          }
        }

        return counts;
      }, {} as { [severity in BugSeverity]: number[] });

    const datasets = [];
    for (const severity in bugCountsBySeverityAndMonth) {
      datasets.push({
        data: bugCountsBySeverityAndMonth[severity],
        label: severity,
      });
    }

    return { labels: lastSixMonths, datasets };
  }
}
