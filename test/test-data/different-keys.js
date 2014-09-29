var debounce = Debouncer(database, {
	delayTimeMs: function (n) {
		return 5000 //always allow after 5 seconds
	}
})

var callback = function (err, allowed) {
	if (err) {
		console.warn(err)
	}
	console.log(allowed)
}

debounce('foo', callback) //true (first time)

setTimeout(function () {
	debounce('foo', callback) //false
	debounce('bar', callback) //true, (note 'bar')
}, 2500)

setTimeout(function () {
	debounce('foo', callback) //true, (been over 5 sec since last success)
	debounce('bar', callback) //false, (been under 5 sec since last success)
}, 5100)

setTimeout(function () {
	debounce('foo', callback) //true, (been over 5 sec since last success)
	debounce('bar', callback) //true, (been over 5 sec since last success)
}, 12000)
