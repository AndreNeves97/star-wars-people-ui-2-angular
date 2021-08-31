import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PeopleListDataState } from '../people-list-data-state.type';
import { PeopleListController } from '../people-list.controller';

@Component({
  selector: 'app-people-list-page',
  templateUrl: './people-list-page.component.html',
  styleUrls: ['./people-list-page.component.scss'],
})
export class PeopleListPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  public $dataState: Observable<PeopleListDataState>;

  constructor(private controller: PeopleListController) {
    this.$dataState = this.controller.$dataState;
  }

  ngOnInit(): void {
    this.controller.load();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
