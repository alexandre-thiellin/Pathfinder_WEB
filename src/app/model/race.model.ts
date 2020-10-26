export class Race {

  constructor(public id: number,
              public name: string,
              public description: string) {
  }

  toString(): string {
    return '{"id": ' + this.id + ',"name": ' + this.name + ',"description": ' + this.description + '}';
  }
}
