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

  // get user
  it('should request 1 user', function(done) {
    var qiita = new Qiita4js();
    qiita.users('yukinagae').then(function(result) {
      assert.equal(result.id, 'yukinagae');
      done();
    });
  });

  // list users
  it('should request first 20 users', function(done) {
    var qiita = new Qiita4js();
    qiita.users().then(function(result) {
      assert.equal(result.length, 20);
      done();
    });
  });

  // TODO
  // - get item
  // - get comment
  // - list items
  // - list tag items
  // - list user items
  // - list item comments

});
