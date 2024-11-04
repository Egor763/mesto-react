import { jwtDecode } from 'jwt-decode';

const accessToken = localStorage.getItem('access_token');
const refreshToken = localStorage.getItem('refresh_token');

export function checkToken() {
  let payload = jwtDecode(accessToken);

  let isExpired = false;

  const dateNow = Number(new Date().getTime().toString().slice(0, 10));

  if (payload.exp < dateNow) isExpired = true;
  return isExpired;
}
