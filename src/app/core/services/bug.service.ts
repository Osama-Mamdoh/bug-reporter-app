import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bug } from '@shared/models';
import { BUGS } from '@testing/mocks';

@Injectable({
  providedIn: 'root',
})
export class BugService {
  private bugsSubject$ = new BehaviorSubject<Bug[]>([]);
  bugs$: Observable<Bug[]> = this.bugsSubject$.asObservable();

  constructor() {
    this.bugsSubject$.next(BUGS);
  }

  /**
   *
   * Creates a new bug and adds it to the list of bugs.
   * @param newBug - The bug object to be created.
   */
  createBug(newBug: Bug) {
    newBug.id =
      this.bugsSubject$.value[this.bugsSubject$.value.length - 1].id + 1;
    const bugs = [...this.bugsSubject$.value, newBug];
    this.bugsSubject$.next(bugs);
  }

  /**
   * Edits an existing bug in the list of bugs.
   * @param editedBug - The bug object to be edited.
   */
  editBug(editedBug: Bug) {
    const bugs = this.bugsSubject$.value.map((bug) => {
      if (bug.id === editedBug.id) {
        return editedBug;
      } else {
        return bug;
      }
    });
    this.bugsSubject$.next(bugs);
  }

  /**
   * Deletes a bug from the list of bugs.
   * @param id - The ID of the bug to be deleted.
   */
  deleteBug(id: number) {
    const bugs = this.bugsSubject$.value.filter((bug) => bug.id !== id);
    this.bugsSubject$.next(bugs);
  }
}
