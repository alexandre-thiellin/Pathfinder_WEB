import { Injectable } from '@angular/core';
import {PathfinderApiService} from './pathfinder-api.service';
import {Subject} from 'rxjs';
import {Armor} from '../model/armor.model';

@Injectable({
  providedIn: 'root'
})
export class ArmorsService {

  armors: Armor[] = [];
  armorsSubject = new Subject<Armor[]>();
  armorViewed: Armor;

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitArmors(): void {
    this.armorsSubject.next(this.armors);
  }

  getArmors(): void {
    this.pathfinderApi.getArmors().subscribe(
      (data) => {
        this.armors = data;
        this.emitArmors();
      }
    );
  }

  getArmorById(id: number): Promise<Armor> {
    return new Promise<Armor>(
      (resolve, reject) => {
        this.pathfinderApi.getArmorById(id).subscribe(
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
