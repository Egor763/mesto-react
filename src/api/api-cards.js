class ApiCards {
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

  getCards() {
    return fetch(`${this._baseUrl}/cards`).then((res) =>
      this._checkResponse(res)
    );
  }

  addCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
      },
      // body: card,
      body: JSON.stringify(card),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  addLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => this._checkResponse(res));
  }
}

const baseUrl = 'http://127.0.0.1:8000/api';

export const apiCards = new ApiCards(baseUrl);
