import {Weapon} from './weapon.model';

export class CharacterWeapon {

  constructor(public id: number,
              public weapon: Weapon,
              public equipped: boolean) {
  }
}
