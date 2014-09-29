module.exports = function titleArrayToToc(array) {
	return array.map(function (title) {
		return '- [' + title + '](#' + title.replace(/[,\(\)]/g,'').replace(/\ /g,'-').toLowerCase() + ')'
	}).join('\n')
}