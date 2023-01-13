import m from 'mithril';
const {API_URL} = require('../constants/url');
import Hasher from '../hasher'

let response = {
    isValid: false,
    code: -1,
    body: {}
}

class Authentication {

    constructor()
    {
        this.hasher = new Hasher();
    }
    new(ev, email, password, name) {
        ev.preventDefault(); //don't touch that
        return m.request({
            method: "POST",
            url: API_URL + '/account',
            body: {
                account: {
                    password: password,
                    email: email,
                    name: name,
                    is_admin: false
                }
            },
        })
            .then(function (response) {
                response.isValid = true;
                return response;
            })
            .catch(function (err) {
                response.isValid = false;
                response.code = err.code;
                response.body = err.response.errors;
                console.log('Login error: ' + JSON.stringify(err));
                return response;
            });
    }

    get() {
        return localStorage.getItem('theedJwt');
    }
    post(ev, email, password) {
        ev.preventDefault(); //don't touch that
        return m.request({
            method: 'POST',
            url: API_URL + '/login',
            body: {
                password: password,
                email: email,
            },
        })
            .then(function (response) {
                this.hasher.encrypt(response.data.jwt, true);
                localStorage.setItem('theedJwt', response.data.jwt);
                return true;
            })
            .catch(function (err) {
                console.log('Login error: ' + JSON.stringify(err));
                return false;
            });
    }

    delete() {
        return m.request({
            method: 'POST',
            url: API_URL + '/logout',
            headers: {
                'Authorization': 'Bearer ' + JSON.stringify(localStorage.theedJwt),
            },
        }).then(function (_response) {
            localStorage.removeItem('theedJwt');
        });
    }
};

export default Authentication;
