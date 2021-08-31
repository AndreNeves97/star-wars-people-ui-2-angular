import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api/api.service';

import { UrlUtilsService } from 'src/app/core/url-utils/url-utils.service';
import { People } from '../../domain/entities/people.type';

@Injectable({
  providedIn: 'root',
})
export class PeopleDatasourceService {
  private resource = 'people';

  constructor(
    private apiService: ApiService,
    private urlUtilsService: UrlUtilsService
  ) {}

  public getPeople(
    page: number,
    search: string | null = null
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
      .pipe(map((response: any) => response.results));
  }
}
