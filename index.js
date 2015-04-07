var request = require('request');

// setting
var base_url = 'http://qiita.com/api/v2/';
var apis = ['users', 'items', 'comments'];
var divided_apis = ['users_items', 'items_comments', 'users_stocks', 'tags_items'];

// get request
function get(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
        if(error || response.statusCode !== 200) {
          reject(error);
        } else {
          resolve(JSON.parse(body));
        }
    });
  });
}

// Qiita4js object
function Qiita4js(req) {
  if(req) {
    this.f = req;
  } else {
    this.f = get;
  }
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
    return this.f(url);
  };
});

// available apis divided by parameter
divided_apis.forEach(function(divided_api) {
  Qiita4js.prototype[divided_api] = function(param) {
    var url = base_url;
    var api = divided_api.split('_');
    url += api[0] + '/' + param + '/' + api[1]; // ex) http://qiita.com/api/v2/users/yukinagae/items
    return this.f(url);
  };
});

module.exports = Qiita4js;
