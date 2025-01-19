import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {baseUrl} from '../../shared/api_consts';
import {Observable} from 'rxjs';
import {Planet, ResponseContainer} from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) {
  }

  public getNavigation():Observable<{[key: string] : string}> {
    return this._httpClient.get<{[key: string] : string}>(baseUrl);
  }

  public getPlanets(page?: string): Observable<ResponseContainer<Planet>>{
    return this._httpClient.get<ResponseContainer<Planet>>(`${baseUrl}planets${page ? `/?page=${page}` : ''}`);
  }

  public getPlanetsById(id: string): Observable<Planet> {
    return this._httpClient.get<Planet>(`${baseUrl}planets/${id}`);
  }
}
