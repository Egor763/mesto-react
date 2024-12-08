import { apiAuth } from '../api/api-auth';

export async function checkToken() {
  return apiAuth.refreshToken().then((res) => {
    if (res.success) {
      localStorage.setItem('access_token', res.access_token);
      return true;
    } else {
      return false;
    }
  });
}
