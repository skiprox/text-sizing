'use strict';

var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

/**
 * Text Sizing
 * @param {String} containerEl [The string of the text element to resize]
 * @param {[type]} opts        [Options (WIP)]
 */
function TextSizing(containerEl, opts) {
	// Set the elements
	this.elems = {};
	this._setElements(containerEl);
	// Set the properties
	opts = opts || {};
	this.props = {};
	this._setProps(opts);
	// Set reference to the context and some base settings
	this.ctx = this.elems.canvasEl.getContext('2d');
	this.ctx.textBaseline = 'hanging';
	// Resize the canvas, to set it as the width/height of the container
	this._resizeCanvas();
	// Add the listeners
	this._onWindowResize = this._onWindowResize.bind(this);
	window.addEventListener('resize', this._onWindowResize);
	// Call the resize text function one time to set the text to begin with
	this.increaseText();
}

// Inherit from EventEmitter for Text Sizing
inherits(TextSizing, EventEmitter);

// Store the prototype in a variable for ease and fun!
var proto = TextSizing.prototype;

/**
 * Set the elements
 * @param {String} containerEl [The container to fit the text to]
 */
proto._setElements = function(containerEl) {
	this.elems.containerEl = document.querySelector(containerEl);
	this.elems.canvasEl = document.createElement('canvas');
	// Add the canvas to the container
	this.elems.containerEl.appendChild(this.elems.canvasEl);
};

proto._setProps = function(opts) {
	this.props.containerWidth = this.elems.containerEl.clientWidth;
	this.props.containerHeight = this.elems.containerEl.clientHeight;
	this.props.text = opts.text || 'hello world';
	this.props.fontFamily = opts.fontFamily || 'helvetica';
	this.props.fontSize = 40;
};

proto._onWindowResize = function(e) {
	this._resizeCanvas();
	this.increaseText();
};

/**
 * Resize the canvas
 * @return {[type]} [description]
 */
proto._resizeCanvas = function() {
	this.props.containerWidth = this.elems.containerEl.clientWidth;
	this.props.containerHeight = this.elems.containerEl.clientHeight;
	this.elems.canvasEl.width = this.props.containerWidth;
	this.elems.canvasEl.height = this.props.containerHeight;
};

/**
 * Resize the text to fit the containing element
 */
proto.increaseText = function() {
	this.ctx.clearRect(0, 0, this.props.containerWidth, this.props.containerHeight);
	this.ctx.textBaseline = 'hanging';
	this.ctx.font = this.props.fontSize + 'px ' + this.props.fontFamily;
	if (this.ctx.measureText(this.props.text).width < this.props.containerWidth - 1) {
		this.props.fontSize += 1;
		this.increaseText();
	}
	else if (this.ctx.measureText(this.props.text).width > this.props.containerWidth + 2) {
		this.decreaseText();
	}
	else {
		this.ctx.fillText(this.props.text, 0, 2);
	}
};

proto.decreaseText = function() {
	this.ctx.clearRect(0, 0, this.props.containerWidth, this.props.containerHeight);
	this.ctx.textBaseline = 'hanging';
	this.ctx.font = this.props.fontSize + 'px ' + this.props.fontFamily;
	if (this.ctx.measureText(this.props.text).width > this.props.containerWidth - 1) {
		this.props.fontSize -= 1;
		this.decreaseText();
	}
	else {
		this.ctx.fillText(this.props.text, 0, 2);
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
