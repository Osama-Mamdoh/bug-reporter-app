import { Component } from '@angular/core';
import { BugService } from '@core/services';
import { Bug } from '@shared/models';
@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrl: './bugs.component.scss',
})
export class BugsComponent {
  page = 1;
  pageSize = 10;
  collectionSize: number;
  bugs: Bug[] = [];
  displayedBugs: Bug[] = [];

  constructor(private bugService: BugService) {}

  refreshCountries() {
    this.displayedBugs = this.bugs.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  ngOnInit() {
    this.bugService.bugs$.subscribe((bugs) => {
      this.bugs = bugs;
      this.collectionSize = this.bugs.length;
      this.refreshCountries();
    });
  }
}
