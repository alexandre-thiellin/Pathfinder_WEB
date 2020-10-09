import { Injectable } from '@angular/core';
import {PathfinderApiService} from './pathfinder-api.service';
import {Subject} from 'rxjs';
import {Skill} from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skill[] = [];
  skillsSubject = new Subject<Skill[]>();

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitSkills(): void {
    this.skillsSubject.next(this.skills);
  }

  getSkills(): void {
    this.pathfinderApi.getSkills().subscribe(
      (data) => {
        this.skills = data;
        this.emitSkills();
      }
    );
  }

  getSkillById(id: number): Promise<Skill> {
    return new Promise<Skill>(
      (resolve, reject) => {
        this.pathfinderApi.getSkillById(id).subscribe(
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
