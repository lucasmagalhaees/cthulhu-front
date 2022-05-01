import http from '../utils/http';
import { ISheet } from '../usecase/sheet';

const baseUrl = 'http://localhost:9400/char-generator';

export const getAllProducts = () =>
  http.get<ISheet>(`${baseUrl}/random-char`).then((res) => res.data);
