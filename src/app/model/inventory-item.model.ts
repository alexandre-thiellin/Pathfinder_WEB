import {Item} from './item.model';

export class InventoryItem {

  constructor(public id: number,
              public item: Item,
              public equipped: boolean) {
  }
}
