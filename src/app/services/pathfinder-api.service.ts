import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathfinderApiService {

  baseUrl = 'http://localhost:8889/pathfinder/';

  constructor(private httpClient: HttpClient) {
  }

  getObjects(type: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + type);
  }

  getObjectById(type: string, id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + type + '/id/' + id);
  }
}
