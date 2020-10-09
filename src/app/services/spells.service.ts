import { Injectable } from '@angular/core';
import {PathfinderApiService} from './pathfinder-api.service';
import {Subject} from 'rxjs';
import {Spell} from '../model/spell.model';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  spells: Spell[] = [];
  spellsSubject = new Subject<Spell[]>();

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitSpells(): void {
    this.spellsSubject.next(this.spells);
  }

  getSpells(): void {
    this.pathfinderApi.getSpells().subscribe(
      (data) => {
        this.spells = data;
        this.emitSpells();
      }
    );
  }

  getSpellById(id: number): Promise<Spell> {
    return new Promise<Spell>(
      (resolve, reject) => {
        this.pathfinderApi.getSpellById(id).subscribe(
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
