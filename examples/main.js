/*jshint -W121, -W018*/
'use strict';

var textSizing = require( './../text-sizing.js' );

var Main = (function() {

	return {
		init : function() {
			new textSizing('.text');
			return this;
		}
	};

}());

module.exports = Main.init();
