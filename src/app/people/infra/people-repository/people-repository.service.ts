import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderByMode } from 'src/app/core/order-by/order-by-mode.type';
import { PeopleDatasourceService } from 'src/app/people/external/people-datasource/people-datasource.service';
import { People } from '../../domain/entities/people.type';
import { PeopleRequest } from './people-request.type';

@Injectable({
  providedIn: 'root',
})
export class PeopleRepositoryService {
  constructor(private peopleDatasourceService: PeopleDatasourceService) {}

  public getPeople(request: PeopleRequest): Observable<People[]> {
    return this.peopleDatasourceService
      .getPeople(request.page, request.name)
      .pipe(
        map((data) => this.getPeopleWithId(data, request)),
        map((data) => this.sortPeople(data, request))
      );
  }

  private getPeopleWithId(data: People[], request: PeopleRequest): People[] {
    const page_offset = (request.page - 1) * 10;

    return data.map((people, index) => {
      const id = page_offset + index;

      return {
        ...people,
        id,
      };
    });
  }

  private sortPeople(data: People[], request: PeopleRequest): People[] {
    const order_by = request.order_by;

    if (!order_by.order_by_mode) {
      return data;
    }

    return data.sort((p1, p2) => {
      if (!order_by.order_by_attr) {
        return 0;
      }

      const v1 = p1[order_by.order_by_attr];
      const v2 = p2[order_by.order_by_attr];

      if (order_by.order_by_mode === OrderByMode.ASC) {
        return v1 < v2 ? -1 : 1;
      }

      return v1 < v2 ? 1 : -1;
    });
  }
}
