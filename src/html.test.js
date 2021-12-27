const library = require('./html');
const fs = require('fs');
const path = require('path');

const tests = require('../data/getJobDescription.test.json');

const dataFolder = path.join(__dirname, '..', 'data');

describe('finds ths right job description text from rendered html', () => {
	tests.forEach(({name, source, toInclude, toExclude}) => {
		describe(`for '${name}'`, () => {

			const htmlBody = fs.readFileSync(path.join(dataFolder, source));
			const text = library.getJobDescription(htmlBody);

			if (toInclude) {
				test.each(toInclude)('toInclude: %s', (phrase)=>{
					expect(text).toContain(phrase)
				})
			}

			if (toExclude) {
				test.each(toExclude)('toExclude: %s', (phrase)=>{
					expect(text).not.toContain(phrase)
				})
			}

		})
	})
	
})