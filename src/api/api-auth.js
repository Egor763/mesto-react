class ApiAuth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return new Error('Ошибка авторизации');
    }
  }

  register(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkResponse(res));
  }
}

const baseUrl = 'http://127.0.0.1:8000/api';
export const apiAuth = new ApiAuth(baseUrl);
