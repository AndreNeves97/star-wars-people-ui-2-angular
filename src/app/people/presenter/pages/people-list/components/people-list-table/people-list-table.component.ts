import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { OrderBy } from 'src/app/core/order-by/order-by.type';
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

  constructor(private controller: PeopleListController) {}

  onSort(orderByData: any) {
    console.log(orderByData);
    // // resetting other headers
    // this.headers.forEach((header) => {
    //   if (header.sortable !== column) {
    //     header.direction = '';
    //   }
    // });
    // this.service.sortColumn = column;
    // this.service.sortDirection = direction;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
  }
}
