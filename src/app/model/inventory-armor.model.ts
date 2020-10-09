import {Armor} from './armor.model';

export class InventoryArmor {

  constructor(public id: number,
              public armor: Armor,
              public equipped: boolean) {
  }
}
