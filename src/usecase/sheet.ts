export interface ISheet {
  hitPoints: number;
  age: number;
  movementRate: number;
  build: number;
  bonusDamage: number;
  magicPoints: number;
  nativeLanguage: string;
  foreignLanguage: string;
  skillFirst: ISkill[];
  skillSecond: ISkill[];
  charFirst: ISkill[];
  charSecond: ISkill[];
}

export class Sheet implements ISheet {
  hitPoints: number;
  age: number;
  movementRate: number;
  build: number;
  bonusDamage: number;
  magicPoints: number;
  nativeLanguage: string;
  foreignLanguage: string;
  skillFirst: ISkill[];
  skillSecond: ISkill[];
  charFirst: ISkill[];
  charSecond: ISkill[];

  constructor(
    hitPoints: number,
    age: number,
    movementRate: number,
    build: number,
    bonusDamage: number,
    magicPoints: number,
    nativeLanguage: string,
    foreignLanguage: string,
    charFirst: ISkill[],
    charSecond: ISkill[],
    skillFirst: ISkill[],
    skillSecond: ISkill[]
  ) {
    this.hitPoints = hitPoints;
    this.age = age;
    this.movementRate = movementRate;
    this.build = build;
    this.bonusDamage = bonusDamage;
    this.magicPoints = magicPoints;
    this.nativeLanguage = nativeLanguage;
    this.foreignLanguage = foreignLanguage;
    this.skillFirst = skillFirst;
    this.charFirst = charFirst;
    this.skillSecond = skillSecond;
    this.charSecond = charSecond;
  }
}

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
