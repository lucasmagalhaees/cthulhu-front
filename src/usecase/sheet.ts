export interface Sheet {
  hitPoints: number;
  age: number;
  movementRate: number;
  build: number;
  bonusDamage: number;
  magicPoints: number;
  nativeLanguage: string;
  foreignLanguage: string;
  skills: Skill[];
  characteristics: Skill[];
}

export interface Skill {
  attributeName: string;
  mainValue: number;
  halfValue: number;
  fifthValue: number;
}
