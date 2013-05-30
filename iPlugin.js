(function() {
	var iPlugin = function() {
		this.constructor = "iPlugin";
	};
	iPlugin.prototype = {
		rename: function() {
			window.iPlugin = undefined;
			return iPlugin;
		}
	};

	if(typeof define === "function" && define.amd) {
	    define('Template', [], function() {
	      return Template;
	    });
  	}
  	else {
  		window.iPlugin = window.i = iPlugin;
  	}
})();