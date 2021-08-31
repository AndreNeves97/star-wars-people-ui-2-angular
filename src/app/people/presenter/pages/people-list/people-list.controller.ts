import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { People } from 'src/app/people/domain/entities/people.type';
import { PeopleRepositoryService } from 'src/app/people/infra/people-repository/people-repository.service';
import { PeopleListDataState } from './people-list-data-state.type';
import { PeopleListFilterState } from './people-list-filter-state.type';
import { PeopleListViewState } from './people-list-view-state.type';

@Injectable({
  providedIn: 'root',
})
export class PeopleListController implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  $filterState: BehaviorSubject<PeopleListFilterState> =
    new BehaviorSubject<PeopleListFilterState>(PeopleListFilterState.default());

  $viewState: BehaviorSubject<PeopleListViewState> =
    new BehaviorSubject<PeopleListViewState>(PeopleListViewState.default());

  $dataState: BehaviorSubject<PeopleListDataState> =
    new BehaviorSubject<PeopleListDataState>(PeopleListDataState.loading());

  constructor(private peopleRepositoryService: PeopleRepositoryService) {}

  public load() {
    this.setLoading();

    const filterState = this.$filterState.value;
    const viewState = this.$viewState.value;

    this.peopleRepositoryService
      .getPeople({
        created_start: filterState.created_start,
        created_end: filterState.created_end,
        skin_color: filterState.skin_color,
        name: filterState.name,
        page: viewState.page,
        order_by: viewState.order_by,
      })
      .subscribe(
        (data) => this.setData(data),
        () => this.setError()
      );
  }

  private setLoading() {
    this.$dataState.next(PeopleListDataState.loading());
  }

  private setError() {
    this.$dataState.next(PeopleListDataState.error());
  }

  private setData(data: People[]) {
    this.$dataState.next(PeopleListDataState.success(data));
  }

  ngOnInit(): void {
    this.listenFilterState();
    this.listenViewState();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private listenFilterState() {
    this.$filterState.pipe().subscribe(() => {
      this.load();
    });
  }

  private listenViewState() {
    this.$viewState.pipe().subscribe(() => {
      this.load();
    });
  }
}
