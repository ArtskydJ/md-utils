var processDir = require('./processDir.js')

module.exports = function () {
	var dir = process.argv[2] || __dirname
	processDir(dir)
}

/*
replace table of contents with
{{#chapters}}
- [{{name}}](linkified)
{{/chapters}}

try using yargs or optimist or minimist (if no flags, don't need to)
*/

/*
file
	.split('\n')
	.filter(/^#/.test.bind(RegExp))
	.replace(/[,\(\)]/g,'')
	.replace(/\ /g,'-')
*/
