class MoviesApi {
    constructor() {
        this.baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    async getMovies() {
        const res = await fetch(`${this.baseUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return this._getResponseData(res);
    }
}

const moviesApi = new MoviesApi();

export default moviesApi;
