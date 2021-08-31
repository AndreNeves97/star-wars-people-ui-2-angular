import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { SortableDirective } from 'src/app/core/components/table/directives/sortable/sortable.directive';
import { OrderBy } from 'src/app/core/order-by/order-by.type';
import { PeopleOrderableAttributes } from 'src/app/people/domain/entities/people-sort-attributes.type';
import { People } from 'src/app/people/domain/entities/people.type';
import { PeopleListController } from '../../people-list.controller';

@Component({
  selector: 'app-people-list-table',
  templateUrl: './people-list-table.component.html',
  styleUrls: ['./people-list-table.component.scss'],
})
export class PeopleListTableComponent implements OnInit, OnChanges {
  @Input()
  data!: People[];

  @ViewChildren(SortableDirective) headers!: QueryList<SortableDirective>;

  constructor(private controller: PeopleListController) {}

  onSort(order_by: OrderBy<PeopleOrderableAttributes>) {
    this.headers.forEach((header) => {
      if (header.sortable !== order_by.order_by_attr) {
        header.direction = null;
      }
    });

    this.controller.setOrderBy(order_by);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}
}
