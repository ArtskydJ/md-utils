var fs = require('fs')
var path = require('path')

module.exports = function processDir(dir) {
	//scan dir, get list of .mdtemplate files
	//go through list
		//scan for moustaches, get list of them, get list of titles; don't rescan file again
		//go through list
			//if found table-of-contents, pop new toc into new file
			//if found license: replace with link to license or license file
			//if found file: scan file, delete surrounding newlines, pop it in new file
		//write new file
	//go on to next

	fs.readdirSync(dir).filter(function (file) {
		return path.extname(file) === '.mdtemplate'
	}).forEach(function (filePath) {
		var file = fs.readfileSync(filePath, {encoding: 'utf8'})
		//var newFile = new String(file)
		processFile(file)
	})
}