(function(window){
	function lQuery(selector){
		return new lQuery.prototype.init(selector);
	}
	lQuery.fn = lQuery.prototype = {
		constructor:lQuery,
		init:function(selector){
			if(!selector){
				return this;
			}
			
		}
	}
	lQuery.prototype.init.prototype = lQuery.fn;
	window.lQuery = window.$ = lQuery;
})(window);