import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleDatasourceService } from 'src/app/people/external/people-datasource/people-datasource.service';
import { People } from '../../domain/entities/people.type';
import { PeopleRequest } from './people-request.type';

@Injectable({
  providedIn: 'root',
})
export class PeopleRepositoryService {
  constructor(private peopleDatasourceService: PeopleDatasourceService) {}

  public getPeople(request: PeopleRequest): Observable<People[]> {
    return this.peopleDatasourceService.getPeople(request.page, request.name);
  }
}
