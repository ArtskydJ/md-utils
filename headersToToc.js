function fragmentize(str) { //Make the string into a URL fragment
	//delete commas and parentheses, then turn spaces into hyphens, then lowercase it
	return str.replace(/[,\(\)]/g, '').replace(/\ /g, '-').toLowerCase()
}

module.exports = function headersToToc(headers) {
	return headers.map(function (header) {
		return '- [' + header + '](#' + fragmentize(header) + ')'
	}).join('\n')
}
