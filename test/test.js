/**
 * Module tests
 */
var assert = require('assert');
var should = require('should');

var Qiita4js = require('..');

describe('Qiita4js', function() {

  it('should expose Qiita4js', function() {
    should.exist(Qiita4js);
    Qiita4js.should.be.type('function');
  });

  // - get user
  // GET /api/v2/users/:id
  it('should request 1 user', function(done) {
    var qiita = new Qiita4js();
    qiita.users('yukinagae').then(function(result) {
      assert.equal(result.id, 'yukinagae');
      done();
    });
  });

  // - list users
  // GET /api/v2/users
  it('should request first 20 users', function(done) {
    var qiita = new Qiita4js();
    qiita.users().then(function(result) {
      assert.equal(result.length, 20);
      done();
    });
  });

  // - get item
  // GET /api/v2/items/:id
  it('should request 1 item', function(done) {
    var qiita = new Qiita4js();
    qiita.items('d2de7a3c0451cc96aa00').then(function(result) {
      assert.equal(result.user.id, 'yukinagae');
      done();
    });
  });

  // - list items
  // GET /api/v2/items
  it('should request first 20 items', function(done) {
    var qiita = new Qiita4js();
    qiita.items().then(function(result) {
      assert.equal(result.length, 20);
      done();
    });
  });

  // - list user items
  // GET /api/v2/users/:user_id/items
  it('should request user items', function(done) {
    var qiita = new Qiita4js();
    qiita.users_items('yukinagae').then(function(result) {
      console.log(result.length);
      // assert.equal(result.length, 20);
      done();
    });
  });


  // TODO must
  // - get comment
  // GET /api/v2/comments/:id
  // - list item comments
  // GET /api/v2/items/:item_id/comments
  // - list stocked items
  // GET /api/v2/users/:user_id/stocks
  // - list tag items
  // GET /api/v2/tags/:id/items

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
