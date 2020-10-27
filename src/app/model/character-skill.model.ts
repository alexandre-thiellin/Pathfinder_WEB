import {Skill} from './skill.model';


export class CharacterSkill {

  // tslint:disable:variable-name
  constructor(public skill: Skill,
              public class_skill: boolean,
              public rank: number,
              public id?: number) {
  }
}
