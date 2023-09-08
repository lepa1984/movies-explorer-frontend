class Api {
    constructor({ baseUrl }) {
        this.baseUrl = baseUrl;
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    async getMovies() {
        const res = await fetch(`${this.baseUrl}/movies`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
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
    async getProfileInfo() {
        const res = await fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }

    async saveMovie(data) {
        const res = await fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                trailerLink: data.trailerLink,
                thumbnail: data.thumbnail,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
        });
        return this._getResponseData(res);
    }

    async getSavedMovies() {
        const res = await fetch(`${this.baseUrl}/movies`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getJson(res);
    }
    async deleteMovies(cardId) {
        const res = await fetch(`${this.baseUrl}/movies/${cardId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }

    async updateUserInfo(data) {
        const res = await fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        });
        return this._getResponseData(res);
    }

    async addLike(cardId) {
        const res = await fetch(`${this.baseUrl}/movies/${cardId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }

    async removeLike(cardId) {
        const res = await fetch(`${this.baseUrl}/movies/${cardId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }
}

const api = new Api({
    baseUrl: 'api.lepa1984.nomoredomainsicu.ru',
});
export default api;
