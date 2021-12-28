const alg = require('./alg')
const path = require('path')
const fs = require('fs')

test('split a sentence into tokens', () => {
	const ts = alg.toTokens('this is a, sentence');
	expect(ts).toEqual([['this'],['is'],['a'],['sentence'],['this','is'],['is','a']]);
})

test('simple similarity', () => {
	const t1 = alg.toTokens('a sentence');
	const t2 = alg.toTokens('another sentence');
	expect(alg.simpleSimilarity(t1,t2)).toBe(1/3);
})

test('disney score', () => {
	const jobHTML = fs.readFileSync(path.resolve(__dirname, '..', 'data','disney.html'), 'utf8')
	const resumeText = "I am applying for Disney Story Artist."
	const score = alg.calculateScore(jobHTML, resumeText)
	console.log(score)
	expect(score).not.toBe(0)
})