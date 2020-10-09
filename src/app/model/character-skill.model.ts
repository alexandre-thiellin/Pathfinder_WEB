import {Skill} from './skill.model';


export class CharacterSkill {

  // tslint:disable:variable-name
  constructor(public id: number,
              public skill: Skill,
              public class_skill: boolean,
              public rank: number) {
  }
}
