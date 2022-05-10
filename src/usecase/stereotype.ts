export interface IStereotype {
  name: string;
  alias: string;
  description: string;
}

export class Stereotype implements IStereotype {
  name: string;
  alias: string;
  description: string;

  constructor(name: string, alias: string, description: string) {
    (this.name = name), (this.alias = alias), (this.description = description);
  }
}
