var fs = require('fs')
var Hogan = require('hogan.js')
var licenses = require('./licenses.json')
var path = require('path')
var xtend = require('xtend')

function fragmentize(str) { //Make the string into a URL fragment
	//delete commas and parentheses, then turn spaces into hyphens, then lowercase it
	return str.replace(/[^\w\ ]/g, '').trim().replace(/\ /g, '-').toLowerCase()
}

function headersToToc(headers) {
	return headers.map(function (header) {
		var cleanHeader = header.replace(/^#*/g, '')
		var indent = "\t\t\t".slice(0, header.length - cleanHeader.length)
		return indent + '- [' + cleanHeader + '](#' + fragmentize(header) + ')'
	}).join('\n')
}

function loadExternalFiles(fileText, resolve) {
	var fileData = {}
	//fileData['file'] = {}
	Hogan.scan(fileText).forEach(function (piece) {
		if (piece.n) {
			try {
				fileData[piece.n] = fs.readFileSync(resolve(piece.n.replace(/\*/g, '.')), {encoding: 'utf8'})
			} catch (err) {
				if (err.code !== 'ENOENT') throw err
			}
		}
	})
	return fileData
}

function compileLicenses(licenses, licenseInfo) {
	return Object.keys(licenses).map(function (licenseName) {
		return licenses[licenseName].text
	}).map(function (licenseText) {
		return Hogan.compile(licenseText).render(licenseInfo)
	})
}

function processFile(fileText, compiledLicenses, externalFiles) {
	return Hogan.compile(fileText).render(xtend(
		externalFiles, {
			'table-of-contents': headersToToc(fileText.match(/^#+(.+)/mg)),
			'license': compiledLicenses
		}
	))
}

function processDir(targetDir, opts) {
	opts = opts || {}
	var exts = opts.extensions || ['.mdtemplate']
	var newExt = opts.newExtension || '.md'
	var resolve = path.resolve.bind(null, targetDir)
	var files = fs.readdirSync(targetDir)
	var pkgJson = JSON.parse(fs.readFileSync( resolve('package.json') ))
	var compiledLicenses = compileLicenses(licenses, {
		organization: (pkgJson.author? pkgJson.author.name : pkgJson.organization) || '[Author]',
		project: pkgJson.name || pkgJson.project || '[Project]',
		year: new Date().getFullYear()
	})

	files.filter(function (fileName) {
		var fileExt = path.extname(fileName).toLowerCase()
		return (exts.indexOf( fileExt ) !== -1)
	}).forEach(function (fileName) {
		var oldPath = resolve(fileName)
		var newPath = resolve(fileName.replace(/\.[^\.\s]+$/, '') + newExt)

		var oldText = fs.readFileSync(oldPath, {encoding: 'utf8'})
		var externalFiles = loadExternalFiles(oldText, resolve)
		var newText = processFile(oldText, compiledLicenses, externalFiles)

		console.log(oldPath, '->', newPath)
		fs.writeFileSync(newPath, newText)
	})
}

var main = function (opts) {
	var dir = (opts && opts.dir) || process.argv[2] || __dirname
	processDir(dir, opts)
}

main.fragmentize = fragmentize
main.headersToToc = headersToToc
main.loadExternalFiles = loadExternalFiles
main.compileLicenses = compileLicenses
main.processFile = processFile
main.processDir = processDir

module.exports = main

main()
