import {Item} from './item.model';

export class CharacterItem {

  constructor(public id: number,
              public item: Item,
              public equipped: boolean) {
  }
}
