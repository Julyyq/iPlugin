(function() {
	var Util = function() {
		this.constructor = "Util";
	};
	Util.prototype = {
		isArray: function(object) {
			if(typeof Array.isArray === "function") {
				return Array.isArray(object);
			}
			else {
				return toString.call(object) === '[object Array]';
			}
		}
	};

	window.iPlugin.Util = Util;
})();