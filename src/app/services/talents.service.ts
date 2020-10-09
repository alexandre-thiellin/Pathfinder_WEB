import { Injectable } from '@angular/core';
import {PathfinderApiService} from './pathfinder-api.service';
import {Subject} from 'rxjs';
import {Talent} from '../model/talent.model';

@Injectable({
  providedIn: 'root'
})
export class TalentsService {

  talents: Talent[] = [];
  talentsSubject = new Subject<Talent[]>();
  talentViewed: Talent;

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitTalents(): void {
    this.talentsSubject.next(this.talents);
  }

  getTalents(): void {
    this.pathfinderApi.getTalents().subscribe(
      (data) => {
        this.talents = data;
        this.emitTalents();
      }
    );
  }

  getTalentById(id: number): Promise<Talent> {
    return new Promise<Talent>(
      (resolve, reject) => {
        this.pathfinderApi.getTalentById(id).subscribe(
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
