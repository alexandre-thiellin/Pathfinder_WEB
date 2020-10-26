import {Armor} from './armor.model';

export class CharacterArmor {

  constructor(public armor: Armor,
              public quantity: number,
              public equipped: boolean,
              public id?: number) {
  }
}
