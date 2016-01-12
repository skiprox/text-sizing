'use strict';

/**
 * Text Sizing
 * @param {String} textEl [The string of the text element to resize]
 * @param {[type]} opts   [Options (WIP)]
 */
function TextSizing(textEl, opts) {
	this.window = window;
	this.elem = {};
	this._setElements();
	this.props = {};
	this._setProps();
}

// Inherit from EventEmitter for Text Sizing
inherits(TextSizing, EventEmitter);

// Store the prototype in a variable for ease and fun!
var proto = TextSizing.prototype;

/**
 * Set the elements
 */
this._setElements = function() {
	this.elem.text = document.querySelector(textEl);
	this.elem.textParent = this.elem.text.parentNode;
};

this._setProps = function() {
	this.props.textLineHeight = this.window.getComputedStyle(this.elem.text, null)['lineHeight'];
	this.props.textLineHeight = parseFloat(this.props.textLineHeight.split('px')[0], 10);
	this.props.textParentHeight = this.elem.textParent.offsetHeight;
};

/**
 * Resize the text to fit the containing element
 */
proto.resizeText = function() {

};

module.exports = TextSizing;
