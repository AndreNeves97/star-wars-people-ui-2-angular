import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api/api.service';

import { UrlUtilsService } from 'src/app/core/url-utils/url-utils.service';
import { People } from '../../domain/entities/people.type';

@Injectable({
  providedIn: 'root',
})
export class PeopleDatasourceService {
  private resource = 'people';

  private dataCache: { [key: string]: People[] } = {};

  constructor(
    private apiService: ApiService,
    private urlUtilsService: UrlUtilsService
  ) {}

  public getPeople(
    page: number,
    search: string | null = null
  ): Observable<People[]> {
    const cache_key = this.getCacheKey(page, search);

    if (!!this.dataCache[cache_key]) {
      return of(this.dataCache[cache_key]);
    }

    return this.requestGetPeople(page, search).pipe(
      tap((data) => {
        this.dataCache[cache_key] = data;
      })
    );
  }

  private getCacheKey(page: number, search: string | null = null) {
    if (!!search) {
      return `search=${search};page=${page}`;
    }

    return `page=${page}`;
  }

  private requestGetPeople(
    page: number,
    search: string | null
  ): Observable<People[]> {
    const params: any = {
      page: encodeURIComponent(page),
    };

    if (!!search) {
      params.search = encodeURIComponent(search);
    }

    const queryString = this.urlUtilsService.serializeObjToUrlParams(params);

    return this.apiService
      .get(`${this.resource}/?${queryString}`)
      .pipe(map((response: any) => this.transformPeopleData(response.results)));
  }

  private transformPeopleData(data: any[]): People[] {
    return data.map((people) => {
      return new People(
        people.name,
        parseInt(people.height),
        parseInt(people.mass),
        people.hair_color,
        people.skin_color,
        people.eye_color,
        people.birth_year,
        people.gender,
        new Date(people.created)
      );
    });
  }
}
