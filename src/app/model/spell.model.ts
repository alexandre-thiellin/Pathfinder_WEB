export class Spell {

  // tslint:disable:variable-name
  constructor(public id: number,
              public name: string,
              public school: string,
              public level: string,
              public casting_time: string,
              public components: string,
              public range: string,
              public target: string,
              public effect: string,
              public duration: string,
              public saving_throw: string,
              public spell_resistance: boolean,
              public description: string) {
  }
}
