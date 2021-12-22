var tokenize = require( '@stdlib/nlp-tokenize' );

function toTokens(s) {
	return tokenize(s);
}

module.exports = {
	toTokens
}