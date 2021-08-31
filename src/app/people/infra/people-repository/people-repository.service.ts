import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
      .pipe(map((data) => this.getPeopleWithId(data, request)));
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
}
