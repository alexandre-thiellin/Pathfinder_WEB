import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Race} from '../model/race.model';
import {Class} from '../model/class.model';
import {Item} from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class PathfinderApiService {

  baseUrl = 'http://localhost:8889/pathfinder/';

  constructor(private httpClient: HttpClient) {
  }

  getCharacters(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'characters');
  }

  getClasses(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(this.baseUrl + 'classes');
  }

  getClassById(id: number): Observable<Class> {
    return this.httpClient.get<Class>(this.baseUrl + 'classes/id/' + id);
  }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseUrl + 'items');
  }

  getItemById(id: number): Observable<Item> {
    return this.httpClient.get<Item>(this.baseUrl + 'items/id/' + id);
  }

  getRaces(): Observable<Race[]> {
    return this.httpClient.get<Race[]>(this.baseUrl + 'races');
  }

  getRaceById(id: number): Observable<Race> {
    return this.httpClient.get<Race>(this.baseUrl + 'races/id/' + id);
  }
}
