export class Weapon {

  // tslint:disable:variable-name
  constructor(public id: number,
              public name: string,
              public category: string,
              public range_cat: string,
              public price: number,
              public damage_p: string,
              public damage_m: string,
              public critical: string,
              public range: number,
              public weight: number,
              public damage_type: string,
              public special: string,
              public description: string) {
  }
}
