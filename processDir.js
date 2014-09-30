var fs = require('fs')
var path = require('path')

module.exports = function processDir(dir) {
	var files = fs.readdirSync(dir)
	var examples = files
	try {
		var exampleDir = fs.readdirSync(path.resolve(dir, 'example'))
		examples.push.apply(null, exampleDir)
	} catch (err) {
		if (err.code !== 'ENOENT') {throw err}
	}

	var packagejson = fs.readfileSync(path.resolve(dir, 'package.json'))
	
	files.filter(function (file) {
		return (path.extname(file).toLowerCase() === '.mdtemplate')
	}).forEach(function (filePath) {
		var file = fs.readfileSync(filePath, {encoding: 'utf8'})
		processFile(file, packagejson)
	})
}