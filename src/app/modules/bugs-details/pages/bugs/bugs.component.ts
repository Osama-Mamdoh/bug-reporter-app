import { Component } from '@angular/core';
import { BugService } from '@core/services';
import { Bug } from '@shared/models';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '@shared/components';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TABLE_HEADERS } from '@shared/constants';

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
  faPen = faPen;
  faTrash = faTrash;
  tableHeaders = TABLE_HEADERS;

  constructor(private bugService: BugService, private modalService: NgbModal) {}

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

  deleteBug(bug: Bug) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.bugTitle = bug.title;
    modalRef.result.then(
      () => {
        this.bugService.deleteBug(bug.id);
      },
      (error) => {
        // on error/dismiss
      }
    );
  }
}
