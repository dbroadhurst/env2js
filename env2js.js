var fs = require('fs'),
	argv = require('minimist')(process.argv.slice(2)),
	inFile = argv.in,
	outFile = argv.out;

if (!inFile || !outFile) {

	if (!inFile) {
		console.log('error: need to specify infile --in');
	}

	if (!outFile) {
		console.log('error: need to specify outfile --out');
	}

	return;
}


fs.readFile(inFile, 'utf8', function(err, contents) {
	if (err) {
		console.log('error ', err);
	} else {
		//find templates in the infile
		var settings = contents.match(/\{(.*?)\}/g);

		//overwrite the infile templates with environment variables
		settings.forEach(function(setting) {
			var regex = new RegExp('{' + setting.slice(1, -1) + '}');
			contents = contents.replace(regex, process.env[setting.slice(1, -1)]);
		});

		fs.writeFile(outFile, contents, 'utf8', function(err) {
			if (err) {
				console.log('error ', err);
			} else {
				console.log('created ', outFile);
			}
		});
	}

});
