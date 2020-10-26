import {Item} from './item.model';

export class CharacterItem {

  constructor(public item: Item,
              public quantity: number,
              public equipped: boolean,
              public id?: number) {
  }
}
