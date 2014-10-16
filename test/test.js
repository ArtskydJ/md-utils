var test = require('tap').test

test('test for index', function (t) {
	var index = require('../index.js')

	index()

	t.end()
})

test('test for processDir', function (t) {
	var processDir = require('../processDir.js')
	var count = 0;
	processDir(__dirname, function (fileText, packageJson) { //or process.cwd()
		count++;
		t.equal(
			fileText.replace(/\r/g, '').slice(0, 50),
			"debouncer\n=============\n\n{{table-of-contents}}\n\n##",
			"got correct text"
		)
	})
	t.equal(count, 1, "Processed every file")

	t.end()
})

test('test for processFile', function (t) {
	var processFile = require('../processFile.js')

	processFile("{{license.mit.text}}", {
		organization: "ArtskydJ",
		project: "md-utils"
	})

	t.end()
})
