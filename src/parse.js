const { Readability } = require('@mozilla/readability');

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// function getJobDescriptionNode(body) {

// 	const dom = new JSDOM(body);
// 	// const dom = new JSDOM(`<!DOCTYPE html><html>${body}</html>`);
// 	// const text = dom.window.document.querySelector(".job-description").textContent;
// 	var article = new Readability(dom.window.document).parse();
// 	const text = article.textContent;

// 	return text;
// }

function getJobDescription() {
	var article = new Readability(window.document).parse();
	const text = article.textContent;
	return text;
}

module.exports = {
	getJobDescription
}