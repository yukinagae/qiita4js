// import
var request = require('request');

// setting
var base_url = 'http://qiita.com/api/v2/';
var apis = ['users', 'items', 'comments'];

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
      url += api + '/'; // ex) http://qiita.com/api/v2/users/
    }
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

// export
module.exports = Qiita4js;

// TODO
// - get user
// - get item
// - get comment
// - list users
// - list items
// - list tag items
// - list user items
// - list item comments
