var handlebars = require('handlebars')
var xtend = require('xtend')
var headersToToc = require('./titleArrayToToc.js')
var licenses = require('./licenses.json')

module.exports = function processFile(file, licenseInfo, exampleFiles) {
	//file is a string
	//licenseInfo is an obj that has 'organization' and 'project'
	//exampleFiles is an array of strings of filenames that could hold example files

	if (!file) {
		throw new Error('No "file" supplied')
	} else if (!licenseInfo) {
		throw new Error('No "licenseInfo" supplied')
	} else if (licenseInfo && !licenseInfo.organization) {
		throw new Error('No "licenseInfo.organization" supplied')
	} else if (licenseInfo && !licenseInfo.project) {
		throw new Error('No "licenseInfo.project" supplied')
	}
	var fileTemplate = handlebars.compile(file)
	var fileHeaders = file.match(/^#+(.+)/mg)
	licenseInfo.year = new Date().getFullYear()
	
	return fileTemplate({
		'table-of-contents': headersToToc(fileHeaders),
		'license': Object.keys(licenses).map(function (license) {
			return handlebars.compile(license.text)(licenseInfo)
		},
		'file': exampleFiles.reduce(function (memo, file) {
			memo[path.basename(file)] = fs.readfileSync(file, {encoding: 'utf8'})
			return memo
		}, {})
	})
}
