import { jwtDecode } from 'jwt-decode';

import { apiAuth } from '../api/api-auth';

const accessToken = localStorage.getItem('access_token');

export async function checkToken() {
  let payload = jwtDecode(accessToken);

  const dateNow = Number(new Date().getTime().toString().slice(0, 10));
  console.log('dateNow:', dateNow);

  console.log('payload.exp:', payload.exp);

  const check = () => {
    if (payload.exp < dateNow) {
      return apiAuth.refreshToken().then((res) => {
        if (res.success) {
          localStorage.setItem('access_token', res.access_token);
          return true;
        } else {
          return false;
        }
      });
    } else {
      return true;
    }
  };

  return check();
}
