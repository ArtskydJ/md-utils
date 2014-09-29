var debounce = Debouncer(database, {
	delayTimeMs: function (n) {
		return n*1000 //allow after n seconds (n is the number of successes)
	}
})

var callback = function (err, allowed) {
	if (err) {
		throw err
	}
	console.log(allowed)
}

debounce('foo', callback) //true (will be false until 1 sec after this)
debounce('foo', callback) //false

setTimeout(function () {
	debounce('foo', callback) //false
}, 900)
setTimeout(function () {
	debounce('foo', callback) //true (will be false until 2 sec after this)
}, 1100)

setTimeout(function () {
	debounce('foo', callback) //false
}, 2300)
setTimeout(function () {
	debounce('foo', callback) //false
}, 3000)
setTimeout(function () {
	debounce('foo', callback) //true (will be false until 3 sec after this)
}, 3200)

setTimeout(function () {
	debounce('foo', callback) //true (will be false until 4 sec after this)
}, 6300)

setTimeout(function () {
	debounce('foo', callback) //true (will be false until 5 sec after this)
}, 10400)