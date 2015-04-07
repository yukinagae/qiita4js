/**
 * Module tests
 */
var assert = require('assert');
var should = require('should');

var Qiita4js = require('..');

describe('Qiita4js', function() {

  it('should expose Qiita4js', function(done) {
    should.exist(Qiita4js);
    Qiita4js.should.be.type('function');
    done();
  });

  it('should request 1 user', function(done) {
    var qiita = new Qiita4js();
    qiita.users('yukinagae').then(function(result) {
      assert.equal(result.id, 'yukinagae');
      done();
    });
  });
});
