var processDir = require('./processDir.js')

module.exports = function () {
	var dir = process.argv[2] || __dirname //process.cwd()
	processDir(dir)
}
