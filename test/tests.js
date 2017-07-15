'use strict';

const it = require('mocha').it;
const describe = require('mocha').describe;
const expect = require('chai').expect;
const dropEvery = require('../dist');

describe('Test Suite', () => {
  it('should not modify original', () => {
    const original = [1, 2, 3, 4, 5];
    const modified = dropEvery(original, 2);

    expect(original).to.eql([1, 2, 3, 4, 5]);
    expect(modified).to.eql([1, 3, 5]);
  });

  it('should drop every n-th item', () => {
    expect(dropEvery([1, 2, 3, 4, 5], 2)).to.eql([1, 3, 5]);
    expect(dropEvery([1, 2, 3, 4, 5], 1)).to.eql([]);
    expect(dropEvery([1, 2, 3, 4, 5], 3)).to.eql([1, 2, 4, 5]);
  });

  it('should drop every truthy item from closure', () => {
    expect(dropEvery([1, 2, 3, 4, 5], n => n < 3)).to.eql([3, 4, 5]);
    expect(dropEvery([1, 2, 3, 4, 5], () => true)).to.eql([]);
    expect(dropEvery([1, 2, 3, 4, 5], n => n < 5)).to.eql([5]);
  });
});
