import http from '../utils/http';
import { Sheet } from '../usecase/sheet';

const baseUrl = 'http://localhost:9400/char-generator';

export const getAllProducts = () =>
  http.get<Sheet>(`${baseUrl}/random-char`).then((res) => res.data);
