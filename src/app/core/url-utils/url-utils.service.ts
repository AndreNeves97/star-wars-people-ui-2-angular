import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlUtilsService {
  public serializeObjToUrlParams(obj: { key: string }) {
    return Object.entries(obj)
      .map(([key, value]) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join('&');
  }
}
