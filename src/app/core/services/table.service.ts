import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, delay, map, switchMap, tap } from 'rxjs/operators';
import { Bug, SearchResult, State } from '@shared/models';
import { BugService } from './bug.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _filteredBugs$ = new BehaviorSubject<Bug[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
  };

  constructor(private bugService: BugService, private route: ActivatedRoute) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._filteredBugs$.next(result.bugs);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get filteredBugs$() {
    return this._filteredBugs$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { pageSize, page, searchTerm } = this._state;
    return this.bugService.bugs$.pipe(
      map((data) => {
        // Filter
        let bugs = data.filter((bug) => this._matches(bug, searchTerm));
        const total = bugs.length;

        // Paginate
        bugs = bugs.slice(
          (page - 1) * pageSize,
          (page - 1) * pageSize + pageSize
        );

        return { bugs, total };
      })
    );
  }

  private _matches(bug: Bug, term: string) {
    return (
      bug.title.toLowerCase().includes(term.toLowerCase()) ||
      bug.description.toLowerCase().includes(term.toLowerCase()) ||
      bug.release.toLowerCase().includes(term.toLowerCase()) ||
      bug.severity.toLowerCase().includes(term.toLowerCase()) ||
      bug.createdBy.toLowerCase().includes(term.toLowerCase())
    );
  }
}
