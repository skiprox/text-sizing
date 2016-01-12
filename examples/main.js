/*jshint -W121, -W018*/
'use strict';

var textSizing = require( './../text-sizing.js' );

var Main = (function() {

	return {
		init : function() {
			// if self-initializing, 
			// remove the following line
			textSizing.init();
			return this;
		}
	};

}());

module.exports = Main.init();
