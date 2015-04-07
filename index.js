var request = require('request');

// setting
var base_url = 'http://qiita.com/api/v2/';
var apis = ['users', 'items', 'comments'];
var more_apis = ['users_items'];

// Qiita4js object
function Qiita4js() {
}

// available apis
apis.forEach(function(api) {
  Qiita4js.prototype[api] = function(param) {
    var url = base_url;
    if(param) {
      url += api + '/' + param; // ex) http://qiita.com/api/v2/users/yukinagae
    } else {
      url += api; // ex) http://qiita.com/api/v2/users
    }
    console.log(url);
    return new Promise(function(resolve, reject) {
      request(url, function(error, response, body) {
          if(error || response.statusCode !== 200) {
            reject(error);
          } else {
            resolve(JSON.parse(body));
          }
      });
    });
  };
});

// available more apis
more_apis.forEach(function(more_api) {
  Qiita4js.prototype[more_api] = function(param) {
    var url = base_url;
    var api = more_api.split('_');
    url += api[0] + '/' + param + '/' + api[1]; // ex) http://qiita.com/api/v2/users/yukinagae/items
    return new Promise(function(resolve, reject) {
      request(url, function(error, response, body) {
          if(error || response.statusCode !== 200) {
            reject(error);
          } else {
            resolve(JSON.parse(body));
          }
      });
    });
  };
});

module.exports = Qiita4js;
