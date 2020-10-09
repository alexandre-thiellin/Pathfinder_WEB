import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {PathfinderApiService} from './pathfinder-api.service';
import {Character} from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: Character[] = [];
  charactersSubject = new Subject<Character[]>();

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitCharacters(): void {
    this.charactersSubject.next(this.characters);
  }

  getCharacters(): void {
    this.pathfinderApi.getCharacters().subscribe(
      (data) => {
        this.characters = data;
        this.emitCharacters();
      }
    );
  }

  getCharacterById(id: number): Promise<Character> {
    return new Promise<Character>(
      (resolve, reject) => {
        this.pathfinderApi.getCharacterById(id).subscribe(
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
