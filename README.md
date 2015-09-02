Default Rules
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> A set of default rules for [ESLint](http://eslint.org/).


## Installation

``` bash
$ npm install eslint-rules-default
```


## Usage

``` javascript
var rules = require( 'eslint-rules-default' );
```

#### rules

A set of default rules for [ESLint](http://eslint.org/).

``` javascript
console.dir( rules );
/*
	{
		'comma-dangle': [ 2, 'never' ],
		'no-cond-assign': 2,
		'no-console': 1,
		'no-constant-condition': 2,
		'no-control-regex': 2,
		...
	}
*/
```


## Examples

``` javascript
var merge = require( 'utils-merge2' )(),
	rules = require( 'eslint-rules-default' ),
	config = require( './existing_config.json' );

// Add the rules to an existing ESLint config...
config.rules = rules;
console.dir( config );

// Override certain rules...
rules = merge( rules, {
	'eol-last': 1,
	'func-names': 1,
	'no-nested-ternary': 1,
	'semi': [ 2, 'never' ]
});
console.dir( config );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eslint-rules-default.svg
[npm-url]: https://npmjs.org/package/eslint-rules-default

[travis-image]: http://img.shields.io/travis/kgryte/eslint-rules-default/master.svg
[travis-url]: https://travis-ci.org/kgryte/eslint-rules-default

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eslint-rules-default/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eslint-rules-default?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eslint-rules-default.svg
[dependencies-url]: https://david-dm.org/kgryte/eslint-rules-default

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eslint-rules-default.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eslint-rules-default

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eslint-rules-default.svg
[github-issues-url]: https://github.com/kgryte/eslint-rules-default/issues
