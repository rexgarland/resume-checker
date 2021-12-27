const { getTextFromPDFBytes } = require('./pdf');

function getFile(e) {
	var file;
	if (e.dataTransfer.items) {
		for (var i=0; i<e.dataTransfer.items.length; i++) {
			if (e.dataTransfer.items[i].kind === 'file') {
				file = e.dataTransfer.items[i].getAsFile();
				break;
			}
		}
	} else {
		file = e.dataTransfer.files[0];
	}
	return file;
}

async function dropHandler(e) {
	console.log('dropped');
	e.preventDefault();

	const file = getFile(e);
	console.log(file.name);
	const bytes = await file.arrayBuffer();
	const text = await getTextFromPDFBytes(bytes);
	console.log(text);
}

function handleDragover(e) {
	e.target.style.transform = "scale(1.03)";
	e.preventDefault();
}

function handleDragLeave(e) {
	e.target.style.transform = "scale(1)";
}

document.addEventListener('DOMContentLoaded', () => {
	const dz = document.getElementById('dropzone');
	dz.addEventListener('drop', dropHandler);
	dz.addEventListener('dragover', handleDragover);
	dz.addEventListener('dragleave', handleDragLeave);
})