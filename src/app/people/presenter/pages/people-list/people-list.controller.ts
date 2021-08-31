import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PeopleModule } from 'src/app/people/people.module';
import { PeopleListFilterState } from './people-list-filter-state.type';
import { PeopleListViewState } from './people-list-view-state.type';

@Injectable({
  providedIn: 'root',
})
export class PeopleListController {
  $filterState: BehaviorSubject<PeopleListFilterState> =
    new BehaviorSubject<PeopleListFilterState>(PeopleListFilterState.default());

  $viewState: BehaviorSubject<PeopleListViewState> =
    new BehaviorSubject<PeopleListViewState>(PeopleListViewState.default());

  public load() {
    console.log('loading');
  }
}
