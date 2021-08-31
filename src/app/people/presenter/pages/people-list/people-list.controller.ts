import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { OrderBy } from 'src/app/core/order-by/order-by.type';
import { PeopleOrderableAttributes } from 'src/app/people/domain/entities/people-sort-attributes.type';
import { People } from 'src/app/people/domain/entities/people.type';
import { PeopleRepositoryService } from 'src/app/people/infra/people-repository/people-repository.service';
import { PeopleRequest } from 'src/app/people/infra/people-repository/people-request.type';
import { PeopleListDataState } from './people-list-data-state.type';
import { PeopleListFilterState } from './people-list-filter-state.type';
import { PeopleListViewState } from './people-list-view-state.type';

@Injectable({
  providedIn: 'root',
})
export class PeopleListController {
  filterState$: BehaviorSubject<PeopleListFilterState> =
    new BehaviorSubject<PeopleListFilterState>(PeopleListFilterState.default());

  viewState$: BehaviorSubject<PeopleListViewState> =
    new BehaviorSubject<PeopleListViewState>(PeopleListViewState.default());

  dataState$: BehaviorSubject<PeopleListDataState> =
    new BehaviorSubject<PeopleListDataState>(PeopleListDataState.loading());

  loadRequest$: Subject<void> = new Subject<void>();

  constructor(private peopleRepositoryService: PeopleRepositoryService) {
    this.listenLoadRequest();
    this.listenFilterState();
    this.listenViewState();
  }

  public load() {
    this.loadRequest$.next();
  }

  public setNameFilter(text: string) {
    const filterState = this.filterState$.value;

    this.filterState$.next({
      ...filterState,
      name: text,
    });
  }

  public setOrderBy(order_by: OrderBy<PeopleOrderableAttributes>) {
    const viewState = this.viewState$.value;

    this.viewState$.next({
      ...viewState,
      order_by,
    });
  }

  private loadGetRequest(): PeopleRequest {
    const filterState = this.filterState$.value;
    const viewState = this.viewState$.value;

    return new PeopleRequest(
      filterState.created_start,
      filterState.created_end,
      filterState.skin_color,
      filterState.name,
      viewState.page,
      viewState.order_by
    );
  }

  private setLoading() {
    const data = this.dataState$.value.data;
    this.dataState$.next(PeopleListDataState.loading(data));
  }

  private setError() {
    const data = this.dataState$.value.data;
    this.dataState$.next(PeopleListDataState.error(data));
  }

  private setData(data: People[]) {
    this.dataState$.next(PeopleListDataState.success(data));
  }

  private listenLoadRequest() {
    this.loadRequest$.pipe(debounceTime(50)).subscribe(() => {
      this.setLoading();

      const request = this.loadGetRequest();

      this.peopleRepositoryService.getPeople(request).subscribe(
        (data) => this.setData(data),
        () => this.setError()
      );
    });
  }

  private listenFilterState() {
    this.filterState$.subscribe(() => {
      this.load();
    });
  }

  private listenViewState() {
    this.viewState$.subscribe(() => {
      this.load();
    });
  }
}
