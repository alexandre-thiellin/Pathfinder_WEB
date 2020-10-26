import {Class} from './class.model';

export class CharacterClass {

  // tslint:disable:variable-name
  constructor(public class_: Class,
              public lvl: number,
              public id?: number) {
  }
}
