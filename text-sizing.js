'use strict';

var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

/**
 * Text Sizing
 * @param {String} textEl [The string of the text element to resize]
 * @param {[type]} opts   [Options (WIP)]
 */
function TextSizing(textEl) {
	this.window = window;
	this.elems = {};
	this._setElements(textEl);
	this.props = {};
	this._setProps();
	this.resizeText();
}

// Inherit from EventEmitter for Text Sizing
inherits(TextSizing, EventEmitter);

// Store the prototype in a variable for ease and fun!
var proto = TextSizing.prototype;

/**
 * Set the elements
 * @param {String} textEl [The string of the text element to resize]
 */
proto._setElements = function(textEl) {
	this.elems.textEl = document.querySelector(textEl);
	this.elems.textParent = this.elems.textEl.parentNode;
};

proto._setProps = function() {
	this.props.textLineHeight = this.window.getComputedStyle(this.elems.textEl, null)['lineHeight'];
	this.props.textLineHeight = parseFloat(this.props.textLineHeight.split('px')[0], 10);
	this.props.textParentHeight = this.elems.textParent.offsetHeight;
};

/**
 * Resize the text to fit the containing element
 */
proto.resizeText = function() {
	if (this.props.textParentHeight/this.props.textLineHeight > 1) {
		this.shrinkText();
	}
	else {
		this.growText();
	}
};

proto.growText = function() {

};

proto.shrinkText = function() {

};

proto.destroy = function() {
	this.elems = {};
	this.props = {};
};

module.exports = TextSizing;
