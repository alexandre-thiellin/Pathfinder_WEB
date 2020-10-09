export class Spell {

  constructor(public id: number,
              public name: string,
              public school: string,
              public level: string,
              public castingTime: string,
              public components: string,
              public range: string,
              public target: string,
              public effect: string,
              public duration: string,
              public savingThrow: string,
              public spellResistance: boolean,
              public description: string) {
  }
}
