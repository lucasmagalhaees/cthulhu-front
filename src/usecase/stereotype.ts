export interface IStereotype {
  name: string;
  alias: string;
}

export class Stereotype implements IStereotype {
  name: string;
  alias: string;

  constructor(name: string, alias: string) {
    (name = this.name), (alias = this.alias);
  }
}
