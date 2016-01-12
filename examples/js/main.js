(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../text-sizing.js":2}],2:[function(require,module,exports){
'use strict';


module.exports = TextSizing;

},{}]},{},[1]);
