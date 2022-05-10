export interface ISkill {
  attributeName: string;
  mainValue: number;
  halfValue: number;
  fifthValue: number;
}

export class Skill implements ISkill {
  attributeName: string;
  mainValue: number;
  halfValue: number;
  fifthValue: number;

  constructor(
    attributeName: string,
    mainValue: number,
    halfValue: number,
    fifthValue: number
  ) {
    this.attributeName = attributeName;
    this.mainValue = mainValue;
    this.halfValue = halfValue;
    this.fifthValue = fifthValue;
  }
}
