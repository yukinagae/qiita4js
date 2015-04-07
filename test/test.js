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

  // - get user
  // GET /api/v2/users/:id
  it('should request 1 user', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.users('yukinagae');
    assert.equal(url, 'http://qiita.com/api/v2/users/yukinagae');
  });

  // - list users
  // GET /api/v2/users
  it('should request first 20 users', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.users();
    assert.equal(url, 'http://qiita.com/api/v2/users');
  });

  // - get item
  // GET /api/v2/items/:id
  it('should request 1 item', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.items('d2de7a3c0451cc96aa00');
    assert.equal(url, 'http://qiita.com/api/v2/items/d2de7a3c0451cc96aa00');
  });

  // - list items
  // GET /api/v2/items
  it('should request first 20 items', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.items();
    assert.equal(url, 'http://qiita.com/api/v2/items');
  });

  // - list user items
  // GET /api/v2/users/:user_id/items
  it('should request user items', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.users_items('yukinagae');
    assert.equal(url, 'http://qiita.com/api/v2/users/yukinagae/items');
  });

  // - list stocked items
  // GET /api/v2/users/:user_id/stocks
  it('should request user stocked items', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.users_stocks('yukinagae');
    assert.equal(url, 'http://qiita.com/api/v2/users/yukinagae/stocks');
  });

  // - list tag items
  // GET /api/v2/tags/:id/items
  it('should request tag items', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.tags_items('node.js');
    assert.equal(url, 'http://qiita.com/api/v2/tags/node.js/items');
  });

  // - get comment
  // GET /api/v2/comments/:id
  it('should request 1 comment', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.comments('ba0a1b50b9803f38d200');
    assert.equal(url, 'http://qiita.com/api/v2/comments/ba0a1b50b9803f38d200');
  });

  // - list item comments
  // GET /api/v2/items/:item_id/comments
  it('should request item comments', function() {
    var qiita = new Qiita4js(test);
    var url = qiita.items_comments('d2de7a3c0451cc96aa00');
    assert.equal(url, 'http://qiita.com/api/v2/items/d2de7a3c0451cc96aa00/comments');
  });

  // TODO maybe
  // - list following users
  // GET /api/v2/users/:user_id/followees
  // - list followed users
  // GET /api/v2/users/:user_id/followers
  // - list stocked users
  // GET /api/v2/items/:item_id/stockers
  // - if follow user
  // GET /api/v2/users/:user_id/following
  // - get tag
  // GET /api/v2/tags/:id
  // - list tags
  // GET /api/v2/tags
  // - list following tags
  // GET /api/v2/users/:user_id/following_tags
  // - if follow tag
  // GET /api/v2/tags/:id/following
  // - if stock item
  // GET /api/v2/items/:item_id/stock

});
