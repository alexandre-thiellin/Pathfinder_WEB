import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Race} from '../model/race.model';
import {Class} from '../model/class.model';
import {Item} from '../model/item.model';
import {Weapon} from '../model/weapon.model';
import {Armor} from '../model/armor.model';
import {Skill} from '../model/skill.model';
import {Talent} from '../model/talent.model';
import {Spell} from '../model/spell.model';
import {Character} from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class PathfinderApiService {

  baseUrl = 'http://localhost:8889/pathfinder/';

  constructor(private httpClient: HttpClient) {
  }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.baseUrl + 'characters');
  }

  getCharacterById(id: number): Observable<Character> {
    return this.httpClient.get<Character>(this.baseUrl + 'characters/id/' + id);
  }

  postCharacter(character: Character): Observable<Character> {
    const body = JSON.stringify(character);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<Character>(this.baseUrl + 'characters', body, {headers});
  }

  getCharacterByName(name: string): Observable<Character> {
    return this.httpClient.get<Character>(this.baseUrl + 'characters/name/' + name);
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

  getWeapons(): Observable<Weapon[]> {
    return this.httpClient.get<Weapon[]>(this.baseUrl + 'weapons');
  }

  getWeaponById(id: number): Observable<Weapon> {
    return this.httpClient.get<Weapon>(this.baseUrl + 'weapons/id/' + id);
  }

  getArmors(): Observable<Armor[]> {
    return this.httpClient.get<Armor[]>(this.baseUrl + 'armors');
  }

  getArmorById(id: number): Observable<Armor> {
    return this.httpClient.get<Armor>(this.baseUrl + 'armors/id/' + id);
  }

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.baseUrl + 'skills');
  }

  getSkillById(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.baseUrl + 'skills/id/' + id);
  }

  getTalents(): Observable<Talent[]> {
    return this.httpClient.get<Talent[]>(this.baseUrl + 'talents');
  }

  getTalentById(id: number): Observable<Talent> {
    return this.httpClient.get<Talent>(this.baseUrl + 'talents/id/' + id);
  }

  getSpells(): Observable<Spell[]> {
    return this.httpClient.get<Spell[]>(this.baseUrl + 'spells');
  }

  getSpellById(id: number): Observable<Spell> {
    return this.httpClient.get<Spell>(this.baseUrl + 'spells/id/' + id);
  }
}
