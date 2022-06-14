const {API_URL} = require('../constants/url');

const User = {
  current: {},

  loadList: function() {
    const JWT = localStorage.getItem('theedJwt');

    return m.request({
      method: 'GET',
      url: API_URL + '/users',
      headers: {
        'Authorization': 'Bearer ' + JSON.stringify(JWT),
      },
    })
        .then(function(result) {
          User.list = result.data;
        });
  },

  load: function(id) {
    const JWT = localStorage.getItem('theedJwt');

    return m.request({
      method: 'GET',
      url: API_URL + '/user/' + id,
      headers: {
        'Authorization': 'Bearer ' + JSON.stringify(JWT),
      },
    })
        .then(function(result) {
          User.current = result;
        });
  },
};

module.exports = User;
