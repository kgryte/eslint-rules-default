'use strict';

// MODULES //

var merge = require( 'utils-merge2' )();


// RULES //

var rules = merge(
	{},
	require( 'eslint-rules-errors' ),
	require( 'eslint-rules-best-practices' ),
	require( 'eslint-rules-strict' ),
	require( 'eslint-rules-variables' ),
	require( 'eslint-rules-nodejs' ),
	require( 'eslint-rules-style' ),
	require( 'eslint-rules-es2015' ),
	require( 'eslint-rules-legacy' )
);


// EXPORTS //

module.exports = rules;
