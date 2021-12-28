const { isEqual } = require('lodash');
var tokenize = require( '@stdlib/nlp-tokenize' );

function isWord(token) {
	if (!token) {return false};
	return /[A-z]/.test(token[0])
}

function pairwise(arr) {
	const l = []
	for (var i=0; i<arr.length-1; i++) {
		l.push([arr[i],arr[i+1]])
	}
	return l;
}

function toTokens(text) {
	const tokens = tokenize(text);
	const unigrams = tokens.filter(isWord).map(t=>[t]);
	const bigrams = pairwise(tokens).filter(a=>{return isWord(a[0]) && isWord(a[1])});
	return unigrams.concat(bigrams);
}

function shallowIncludes(arr,v) {
	if (!arr) { return false };
	for (var i=0; i<arr.length; i++) {
		if (isEqual(arr[i],v)) {
			return true;
		}
	}
	return false;
}

function simpleSimilarity(t1, t2) {
	// compare two token lists
	// return probability that a token from either set will be shared
	l1 = t1.filter(t=>shallowIncludes(t2,t)).length;
	l2 = t2.filter(t=>shallowIncludes(t1,t)).length;
	return (l1+l2)/(t1.length+t2.length);
}

function calculateScore(jobText, resumeText) {
	// returns an integer score from 0 to 100, inclusive
	const jobTokens = toTokens(jobText);
	const resumeTokens = toTokens(resumeText);
	const p = simpleSimilarity(jobTokens, resumeTokens);
	return Math.round(p*100)
}

module.exports = {
	calculateScore
}