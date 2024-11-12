import { jwtDecode } from 'jwt-decode';

import { apiAuth } from '../api/api-auth';

const accessToken = localStorage.getItem('access_token');

export async function checkToken() {
  let payload = jwtDecode(accessToken);
  let isExpired = false;

  const dateNow = Number(new Date().getTime().toString().slice(0, 10));

  if (payload.exp < dateNow) isExpired = true;

  const check = () => {
    if (isExpired) {
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
