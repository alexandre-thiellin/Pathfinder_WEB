import { Injectable } from '@angular/core';
import {PathfinderApiService} from './pathfinder-api.service';
import {Race} from '../model/race.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  races: Race[] = [];
  racesSubject = new Subject<Race[]>();
  raceViewed: Race;

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitRaces(): void {
    this.racesSubject.next(this.races);
  }

  getRaces(): void {
    this.pathfinderApi.getRaces().subscribe(
      (data) => {
        this.races = data;
        this.emitRaces();
      }
    );
  }

  getRaceById(id: number): Promise<Race> {
    return new Promise<Race>(
      (resolve, reject) => {
        this.pathfinderApi.getRaceById(id).subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}
