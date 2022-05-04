import http from '../utils/http';
import { ISheet } from '../usecase/sheet';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getAllProducts = () =>
  http.get<ISheet>(`${baseUrl}/random-char`).then((res) => res.data);
