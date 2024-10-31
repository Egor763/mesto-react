class ApiUser {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return 'Ошибка ответа';
    }
  }

  getUser(userId) {
    return fetch(`${this._baseUrl}users/me/${userId}`, {}).then((res) =>
      this._checkResponse(res)
    );
  }

  updateUser(userId, name, about) {
    return fetch(`${this._baseUrl}users/me/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, about }),
    }).then((res) => this._checkResponse(res));
  }

  updateAvatar(userId, link) {
    return fetch(`${this._baseUrl}users/me/${userId}/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ avatar: link }),
    }).then((res) => this._checkResponse(res));
  }
}

const baseUrl = 'http://127.0.0.1:8000/api/';
export const apiUser = new ApiUser(baseUrl);
