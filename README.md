# drop-every
> Returns an array of every nth item in the array dropped

[![travis](https://img.shields.io/travis/ecrmnn/drop-every/master.svg?style=flat-square)](https://travis-ci.org/ecrmnn/drop-every/builds)
[![npm version](https://img.shields.io/npm/v/drop-every.svg?style=flat-square)](http://badge.fury.io/js/drop-every)
[![npm downloads](https://img.shields.io/npm/dm/drop-every.svg?style=flat-square)](http://badge.fury.io/js/drop-every)
[![npm license](https://img.shields.io/npm/l/drop-every.svg?style=flat-square)](http://badge.fury.io/js/drop-every)
[![prs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![eslint](https://img.shields.io/badge/code_style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

### Installation
```bash
npm install drop-every --save
```

### Usage
```javascript
const dropEvery = require('drop-every');

dropEvery([1, 2, 3, 4, 5], 2);
//=> [1, 3, 5]

dropEvery([1, 2, 3, 4, 5], 3);
//=> [1, 2, 4, 5]

dropEvery([1, 2, 3, 4, 5], n => n < 3));
//=> [3, 4, 5]
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)
