import { BuilderProgram } from 'typescript';

export interface ISheet {
  hitPoints: number;
  age: number;
  movementRate: number;
  build: number;
  bonusDamage: number;
  magicPoints: number;
  nativeLanguage: string;
  foreignLanguage: string;
  skills: ISkill[];
  characteristics: ISkill[];
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
  skills: ISkill[];
  characteristics: ISkill[];

  constructor(
    hitPoints: number,
    age: number,
    movementRate: number,
    build: number,
    bonusDamage: number,
    magicPoints: number,
    nativeLanguage: string,
    foreignLanguage: string,
    skills: ISkill[],
    characteristics: ISkill[]
  ) {
    this.hitPoints = hitPoints;
    this.age = age;
    this.movementRate = movementRate;
    this.build = build;
    this.bonusDamage = bonusDamage;
    this.magicPoints = magicPoints;
    this.nativeLanguage = nativeLanguage;
    this.foreignLanguage = foreignLanguage;
    this.skills = skills;
    this.characteristics = characteristics;
  }
}

export interface ISkill {
  attributeName: string;
  mainValue: number;
  halfValue: number;
  fifthValue: number;
}
