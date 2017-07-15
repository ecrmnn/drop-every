'use strict';

module.exports = (array, n) => {
  if (typeof n === 'function') {
    return array.filter((value, key) => !n(value, key));
  }

  return array.filter(value => value % n !== 0);
};