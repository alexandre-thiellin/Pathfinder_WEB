import {Armor} from './armor.model';

export class CharacterArmor {

  constructor(public id: number,
              public armor: Armor,
              public equipped: boolean) {
  }
}
