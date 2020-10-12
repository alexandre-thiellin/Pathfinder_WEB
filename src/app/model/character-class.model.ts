import {Class} from './class.model';

export class CharacterClass {

  // tslint:disable:variable-name
  constructor(public id: number,
              public class_: Class,
              public lvl: number) {
  }
}
