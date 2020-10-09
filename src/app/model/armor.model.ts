export class Armor {

  // tslint:disable:variable-name
  constructor(public id: number,
              public name: string,
              public category: string,
              public price: number,
              public bonus_ca: number,
              public max_dex_bonus: number,
              public test_penalty: number,
              public spell_failure_risk: number,
              public speed_9: number,
              public speed_6: number,
              public weight: number,
              public description: string) {
  }
}
