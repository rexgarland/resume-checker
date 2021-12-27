const alg = require('./alg')

test('split a sentence into tokens', () => {
	const ts = alg.toTokens('this is a, sentence');
	expect(ts).toEqual([['this'],['is'],['a'],['sentence'],['this','is'],['is','a']]);
})

test('simple similarity', () => {
	const t1 = alg.toTokens('a sentence');
	const t2 = alg.toTokens('another sentence');
	expect(alg.simpleSimilarity(t1,t2)).toBe(1/3);
})