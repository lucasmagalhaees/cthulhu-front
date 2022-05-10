export interface ICharParams {
  nativeLanguageRegion: string;
  foreignLanguageRegion: string;
  stereotype: string;
}

export class CharParams implements ICharParams {
  nativeLanguageRegion: string;
  foreignLanguageRegion: string;
  stereotype: string;

  constructor(
    nativeLanguageRegion: string,
    foreignLanguageRegion: string,
    stereotype: string
  ) {
    this.nativeLanguageRegion = nativeLanguageRegion;
    this.foreignLanguageRegion = foreignLanguageRegion;
    this.stereotype = stereotype;
  }
}
