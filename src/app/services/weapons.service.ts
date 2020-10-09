import { Injectable } from '@angular/core';
import {Weapon} from '../model/weapon.model';
import {Subject} from 'rxjs';
import {PathfinderApiService} from './pathfinder-api.service';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  weapons: Weapon[] = [];
  weaponsSubject = new Subject<Weapon[]>();

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitWeapons(): void {
    this.weaponsSubject.next(this.weapons);
  }

  getWeapons(): void {
    this.pathfinderApi.getWeapons().subscribe(
      (data) => {
        this.weapons = data;
        this.emitWeapons();
      }
    );
  }

  getWeaponById(id: number): Promise<Weapon> {
    return new Promise<Weapon>(
      (resolve, reject) => {
        this.pathfinderApi.getWeaponById(id).subscribe(
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
