import { Injectable } from '@angular/core';
import { PeopleDatasourceService } from 'src/app/people/people-datasource/people-datasource.service';
import { PeopleRequest } from './people-request';

@Injectable({
  providedIn: 'root',
})
export class PeopleRepositoryService {
  constructor(private peopleDatasourceService: PeopleDatasourceService) {}

  public getPeople(request: PeopleRequest) {}
}
