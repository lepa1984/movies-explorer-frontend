class Auth {
    constructor() {
        this._baseUrl = 'https://api.lepa1984.nomoredomainsicu.ru';
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    async register(name, email, password) {
        const res = await fetch(`${this._baseUrl}/sign-up`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });
        return this._checkResponse(res);
    }

    async login(email, password) {
        console.log(email, password);
        const res = await fetch(`${this._baseUrl}/sign-in`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        return this._checkResponse(res);
    }

    async checkToken(token) {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        return this._checkResponse(res);
    }
}

const auth = new Auth();

export default auth;
