import { ISkill } from './skill';
export interface IPerson {
  skillName: string;
  detail: string;
  value: number;
}

export class Person implements IPerson {
  skillName: string;
  detail: string;
  value: number;

  constructor(skillName: string, detail: string, value: number) {
    this.skillName = skillName;
    this.detail = detail;
    this.value = value;
  }
}
