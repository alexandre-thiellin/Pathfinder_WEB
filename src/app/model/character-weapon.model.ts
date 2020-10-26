import {Weapon} from './weapon.model';

export class CharacterWeapon {

  constructor(public weapon: Weapon,
              public quantity: number,
              public equipped: boolean,
              public id?: number) {
  }
}
