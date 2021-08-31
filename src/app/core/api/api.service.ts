import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://swapi.dev/api';

  constructor(private httpClient: HttpClient) {}

  public get(url: string) {
    return this.httpClient.get(`${this.baseUrl}/${url}`);
  }
}
