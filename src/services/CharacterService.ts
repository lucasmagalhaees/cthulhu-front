import { ISheet } from '../usecase/sheet';
import http from '../utils/http';
import { IStereotype } from './../usecase/stereotype';

// The sheet API (cthulhu-char-golang); REACT_APP_BASE_URL overrides it, e.g. a local server
const baseUrl =
  import.meta.env.REACT_APP_BASE_URL ||
  'https://cthulhu-char-golang.vercel.app/char-generator';

export const getSheet = () =>
  http.get<ISheet>(`${baseUrl}/random-char`).then((res) => res.data);
export const getSheetWithParams = (
  nativeRegion: string,
  foreignRegion: string,
  stereotype: string
) =>
  http
    .get<ISheet>(`${baseUrl}/random-char`, {
      params: {
        nativeLanguageRegion: nativeRegion,
        foreignLanguageRegion: foreignRegion,
        stereotype: stereotype,
      },
    })
    .then((res) => res.data);

export const getNativeRegions = () =>
  http
    .get<IStereotype[]>(`${baseUrl}/random-char/region/native`)
    .then((res) => res.data);

export const getForeignRegions = () =>
  http
    .get<IStereotype[]>(`${baseUrl}/random-char/region/foreign`)
    .then((res) => res.data);

export const getStereotypes = () =>
  http
    .get<IStereotype[]>(`${baseUrl}/random-char/stereotype`)
    .then((res) => res.data);
