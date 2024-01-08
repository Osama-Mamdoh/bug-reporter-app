import { Component } from '@angular/core';
import { BugService, TableService } from '@core/services';
import { Bug } from '@shared/models';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '@shared/components';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TABLE_HEADERS } from '@shared/constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrl: './bugs.component.scss',
})
export class BugsComponent {
  faPen = faPen;
  faTrash = faTrash;
  tableHeaders = TABLE_HEADERS;
  displayedBugs$: Observable<Bug[]>;
  total$: Observable<number>;
  pageSizes = [10, 20, 30];

  constructor(
    private bugService: BugService,
    private modalService: NgbModal,
    public tableService: TableService
  ) {
    this.displayedBugs$ = tableService.filteredBugs$;
    this.total$ = tableService.total$;
  }

  ngOnInit() {}

  /**
   * Deletes a bug by opening a confirmation modal and deleting the bug if confirmed.
   * @param bug The bug to delete.
   */
  deleteBug(bug: Bug) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.bugTitle = bug.title;
    modalRef.result.then(
      () => {
        this.bugService.deleteBug(bug.id);
      },
      (error) => {}
    );
  }
}
