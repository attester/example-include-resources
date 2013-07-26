// This library calls my dependencies
(function (scope) {
	var Constructor = function () {};
	Constructor.prototype.hello = function (people) {
		// underscore
		return "Hello " + _(people.split(",")).reduce(function (soFar, next) {
			console.log(soFar);
			return soFar + " and " + $.trim(next);
		});
	};

	scope.MyLibrary = new Constructor();
})(window);
