(function ( $ ) {
	$.fn.cachewatch = function(){
		this.addAttr('data-ready', 'loading');
	};

	$.fn.cachewatch.ready = function(){
		this.addAttr('data-ready', 'ready');
		return this;
	};

}( jQuery ));