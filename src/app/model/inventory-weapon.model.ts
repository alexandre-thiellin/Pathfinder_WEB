import {Weapon} from './weapon.model';

export class InventoryWeapon {

  constructor(public id: number,
              public weapon: Weapon,
              public equipped: boolean) {
  }
}
