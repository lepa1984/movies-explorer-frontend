class Api {
    constructor() {
        this.baseUrl = 'https://api.lepa1984.nomoredomainsicu.ru';
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    async getMovies(token) {
        const res = await fetch(`${this.baseUrl}/movies`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }
    async changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return this.removeLike(cardId);
        } else {
            return this.addLike(cardId);
        }
    }
    async getUserInfo(token) {
        const res = await fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }
    async getProfileInfo(token) {
        const res = await fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }

    async saveMovie(data, token) {
        const res = await fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co/${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
        });
        return this._getResponseData(res);
    }

    async getSavedMovies(token) {
        const res = await fetch(`${this.baseUrl}/movies`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }
    async deleteMovies(cardId, token) {
        const res = await fetch(`${this.baseUrl}/movies/${cardId}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }

    async updateUserInfo(data) {
        const res = await fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        });
        return this._getResponseData(res);
    }
}

const api = new Api();
export default api;
