import http from '../utils/http';
import { ISheet } from '../usecase/sheet';
import { IStereotype } from './../usecase/stereotype';
import { CharParams } from '../usecase/charParams';

const baseUrl = process.env.REACT_APP_BASE_URL;

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

export const getRegions = () =>
  http
    .get<IStereotype[]>(`${baseUrl}/random-char/region`)
    .then((res) => res.data);

export const getStereotypes = () =>
  http
    .get<IStereotype[]>(`${baseUrl}/random-char/stereotype`)
    .then((res) => res.data);
