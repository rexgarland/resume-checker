// const pdfjs = require("pdfjs-dist/legacy/build/pdf.js");
const pdfjs = require("pdfjs-dist");
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");
// const pdfjs = require('pdfjs-dist/webpack');

var { Buffer, Uint8Array } = require('buffer');

async function getTextFromPDFBytes(bytesArray) {
	const buffer = Buffer.from(bytesArray);
	const pdf = await pdfjs.getDocument({data: buffer}).promise;
	console.log(`pdf loaded with ${pdf.numPages} pages`);
	const metadata = await pdf.getMetadata();
	console.log('got metadata');
	const page = await pdf.getPage(1);
	console.log('got first page')
	const content = await page.getTextContent();
	console.log('got first page content')
	const text = content.items.map(({str})=>str).join(';');
	console.log(`Page content: ${text}`)
	return text;
}

async function convertPDFToTextSwiftCallback(bytesArray, cb) {
	cb('running...')
	try {
		const text = await getTextFromPDFBytes(bytesArray);
		cb(`Finished: ${text}`)
	} catch (err) {
		cb(`Error: ${err}\n${err.stack}`);
	}
}

module.exports = {
	getTextFromPDFBytes
}