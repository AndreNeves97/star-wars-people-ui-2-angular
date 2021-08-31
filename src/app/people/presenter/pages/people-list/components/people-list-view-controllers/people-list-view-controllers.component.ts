import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, startWith, takeUntil, tap } from 'rxjs/operators';
import { PeopleListController } from '../../people-list.controller';

@Component({
  selector: 'app-people-list-view-controllers',
  templateUrl: './people-list-view-controllers.component.html',
  styleUrls: ['./people-list-view-controllers.component.scss'],
})
export class PeopleListViewControllersComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  nameFilterFormControl = new FormControl();

  constructor(private controller: PeopleListController) {}

  private listenNameFilterChange() {
    this.nameFilterFormControl.valueChanges
      .pipe(takeUntil(this.destroy$), startWith(''), debounceTime(400))
      .subscribe((text) => this.setNameFilter(text));
  }

  private setNameFilter(text: string) {
    console.log(text);
    this.controller.setNameFilter(text);
  }

  ngOnInit(): void {
    this.listenNameFilterChange();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
