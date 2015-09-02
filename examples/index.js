'use strict';

var merge = require( 'utils-merge2' )(),
	rules = require( './../lib' ),
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
