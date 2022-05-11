import { ISkill } from './skill';
import { IPerson } from './person';
export interface ISheet {
  hitPoints: number;
  age: number;
  movementRate: number;
  build: number;
  bonusDamage: number;
  magicPoints: number;
  nativeLanguage: IPerson;
  foreignLanguage: IPerson;
  creditRating: IPerson;
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
  nativeLanguage: IPerson;
  foreignLanguage: IPerson;
  creditRating: IPerson;
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
    nativeLanguage: IPerson,
    foreignLanguage: IPerson,
    creditRating: IPerson,
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
    this.creditRating = creditRating;
    this.skillFirst = skillFirst;
    this.charFirst = charFirst;
    this.skillSecond = skillSecond;
    this.charSecond = charSecond;
  }
}
