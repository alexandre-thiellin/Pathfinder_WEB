import {Race} from './race.model';
import {CharacterClass} from './character-class.model';
import {CharacterSkill} from './character-skill.model';
import {CharacterTalent} from './character-talent.model';
import {CharacterSpell} from './character-spell.model';
import {CharacterWeapon} from './character-weapon.model';
import {CharacterArmor} from './character-armor.model';
import {CharacterItem} from './character-item.model';

// tslint:disable:variable-name
export class Character {

  constructor(public name: string,
              public alignment: string,
              public race: Race,
              public gender: string,
              public age: number,
              public height: string,
              public weight: number,
              public strength: number,
              public dexterity: number,
              public constitution: number,
              public intelligence: number,
              public wisdom: number,
              public charisma: number,
              public hp: number,
              public pc: number,
              public pa: number,
              public po: number,
              public pp: number,
              public exp: number,
              public characters_classes: CharacterClass[],
              public characters_skills: CharacterSkill[],
              public characters_talents: CharacterTalent[],
              public characters_spells: CharacterSpell[],
              public characters_weapons: CharacterWeapon[],
              public characters_armors: CharacterArmor[],
              public characters_items: CharacterItem[],
              public id?: number) {
  }
}
