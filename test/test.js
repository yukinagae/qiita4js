/**
 * Module tests
 */
var assert = require('assert');
var should = require('should');

var Qiita4js = require('..');

describe('Qiita4js', function() {

  // dry-run function for test purpose
  function test(url) {
    return url;
  }

  it('should expose Qiita4js', function() {
    should.exist(Qiita4js);
    Qiita4js.should.be.type('function');
  });

  // GET /api/v2/users/:id
  it('should get 1 user', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.users('yukinagae');
    assert.equal(url, 'http://qiita.com/api/v2/users/yukinagae');
  });

  // GET /api/v2/users
  it('should list first 20 users', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.users();
    assert.equal(url, 'http://qiita.com/api/v2/users');
  });

  // GET /api/v2/items/:id
  it('should get 1 item', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.items('d2de7a3c0451cc96aa00');
    assert.equal(url, 'http://qiita.com/api/v2/items/d2de7a3c0451cc96aa00');
  });

  // GET /api/v2/items
  it('should list first 20 items', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.items();
    assert.equal(url, 'http://qiita.com/api/v2/items');
  });

  // GET /api/v2/users/:user_id/items
  it('should list user items', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.users_items('yukinagae');
    assert.equal(url, 'http://qiita.com/api/v2/users/yukinagae/items');
  });

  // GET /api/v2/users/:user_id/stocks
  it('should list user stocked items', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.users_stocks('yukinagae');
    assert.equal(url, 'http://qiita.com/api/v2/users/yukinagae/stocks');
  });

  // GET /api/v2/tags/:id/items
  it('should list tag items', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.tags_items('node.js');
    assert.equal(url, 'http://qiita.com/api/v2/tags/node.js/items');
  });

  // GET /api/v2/comments/:id
  it('should get 1 comment', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.comments('ba0a1b50b9803f38d200');
    assert.equal(url, 'http://qiita.com/api/v2/comments/ba0a1b50b9803f38d200');
  });

  // GET /api/v2/items/:item_id/comments
  it('should list item comments', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.items_comments('d2de7a3c0451cc96aa00');
    assert.equal(url, 'http://qiita.com/api/v2/items/d2de7a3c0451cc96aa00/comments');
  });

});
