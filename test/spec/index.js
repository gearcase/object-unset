'use strict';

var expect = require('chai').expect;


describe('object-unset', function () {

  var unset = require('../../');

  it('common', function () {

    expect(unset({ a: { b: { c: 7 } } }, 'a')).to.be.eql({});

    expect(unset({ a: [{ b: { c: 7 } }] }, 'a[0]')).to.be.eql({a:[]});

    expect(unset({ a: [{ b: { c: 7 } }] }, 'a.0')).to.be.eql({a:[]});

    expect(unset({ a: { b: { c: 7 } } }, 'a.b.c')).to.be.eql({ a: { b: {} } });

    expect(unset({ a: [{ b: { c: 7 } }] }, 'a[0].b.c')).to.be.eql({ a: [{ b: {} }] });

    expect(unset({ a: [{ b: { c: 7 } }] }, 'a[0].d.c')).to.be.eql({ a: [{ b: { c: 7 } }] });

    expect(unset(null, 'a.b.c')).to.be.null;

    expect(unset({ a: 1 }, 'a.b.c.d')).to.be.eql({ a: 1 });
  });
});
