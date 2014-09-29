var titleArrayToToc = require('./titleArrayToToc.js')
var licenses = require('./licenses.json')

module.exports = function processFile(file) {
	var newFile = new String(file)
	file.match(/\{\{([^\}]+)\}\}/).forEach(function (moustache) {
		if (moustache === 'table-of-contents') {
			var toc = titleArrayToToc(file.match(/^#+(.+)/mg)) //needs g flag?
			newFile.replace( /\{\{table-of-contents\}\}/g, toc) //needs g flag?
		} else if (moustache.indexOf('license') !== -1) {

		}
	})
}
