import http from '../utils/http';
import { ISheet } from '../usecase/sheet';

const baseUrl = 'https://rpg-char-gen.herokuapp.com/char-generator';

export const getAllProducts = () =>
  http.get<ISheet>(`${baseUrl}/random-char`).then((res) => res.data);
