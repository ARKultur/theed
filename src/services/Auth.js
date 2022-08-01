import m from 'mithril';
const {API_URL} = require('../constants/url');

class Authentication {
  get(email, password) {
    return m.request({
      method: 'POST',
      url: API_URL + '/login',
      body: {
        password: password,
        email: email,
      },
    })
        .then(function(response) {
          localStorage.setItem('theedJwt', response.data.jwt);
        })
        .catch(function(err) {
          console.log('Login error: ' + JSON.stringify(err));
        });
  }

  delete() {
    return m.request({
      method: 'POST',
      url: API_URL + '/logout',
      headers: {
        'Authorization': 'Bearer ' + JSON.stringify(localStorage.theedJwt),
      },
    }).then(function(_response) {
      localStorage.removeItem('theedJwt');
    });
  }
};

export default Authentication;
