import {Skill} from './skill.model';


export class CharacterSkill {

  constructor(public id: number,
              public skill: Skill,
              public classSkill: boolean,
              public rank: number) {
  }
}
