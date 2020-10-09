export class Skill {

  // tslint:disable:variable-name
  constructor(public id: number,
              public name: string,
              public require_training: boolean,
              public attribute: string,
              public description: string) {
  }
}
