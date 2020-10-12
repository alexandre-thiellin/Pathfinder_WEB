import {Race} from './race.model';
import {CharacterClass} from './character-class.model';
import {CharacterSkill} from './character-skill.model';
import {CharacterTalent} from './character-talent.model';
import {CharacterSpell} from './character-spell.model';
import {InventoryWeapon} from './inventory-weapon.model';
import {InventoryArmor} from './inventory-armor.model';
import {InventoryItem} from './inventory-item.model';

// tslint:disable:variable-name
export class Character {

  constructor(public id: number,
              public name: string,
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
              public character_classes: CharacterClass[],
              public character_skills: CharacterSkill[],
              public character_talents: CharacterTalent[],
              public character_spells: CharacterSpell[],
              public inventory_weapons: InventoryWeapon[],
              public inventory_armors: InventoryArmor[],
              public inventory_items: InventoryItem[]) {
  }
}
