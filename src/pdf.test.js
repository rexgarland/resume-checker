const pdf = require('./pdf');
const fs = require('fs');

test('get text from pdf bytes', () => {
	const bytes = fs.readFileSync('data/example.pdf'); 
	const bytesArray = Array.from(bytes);
	// return pdf.getTextFromPDFBytes(bytesArray);
})