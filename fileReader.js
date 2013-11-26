var fs = require('fs');
fs.readFile('circle2.js',
function(err,fileContent) {
	if (err) {
		throw err;
	}
	console.log('file content',fileContent.toString());
}
);