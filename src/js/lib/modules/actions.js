import $ from '../core';

$.prototype.html = function (content) {
	for (let i = 0; i < this.length; i++) {
		if (content) {
			this[i].innerHTML = content;
		} else {
			return this[i].innerHTML;
		}
	}

	return this;
};

$.prototype.eq = function (i) {
	const swap = this[i];
	const objLength = Object.keys(this).length;

	for (let i = 0; i < objLength; i++) {
		delete this[i];
	}

	this[0] = swap;
	this.length = 1;

	return this;
};

$.prototype.index = function () {
	const parent = this[0].parentNode;
	const childs = Array.from(parent.children);

	const findMyIndex = item => {
		return item === this[0];
	};

	return childs.findIndex(findMyIndex);
};

$.prototype.find = function (selector) {
	let numberOfItems = 0;
	let counter = 0;
	const copy = Object.assign({}, this);

	for (let i = 0; i < copy.length; i++) {
		const array = copy[i].querySelectorAll(selector);

		if (array.length === 0) {
			continue;
		}
		for (let j = 0; j < array.length; j++) {
			this[counter] = array[j];
			counter++;
		}

		numberOfItems += array.length;
	}
	this.length = numberOfItems;

	const objLength = Object.keys(this).length;
	for (; numberOfItems < objLength; numberOfItems++) {
		delete this[numberOfItems];
	}

	return this;
};

$.prototype.closest = function (selector) {
	let counter = 0;

	for (let i = 0; i < this.length; i++) {
		if (this[i].closest(selector) !== null) {
			this[i] = this[i].closest(selector);
		} else {
			this[i] = 'no-class';
		}
		counter++;
	}

	const objLength = Object.keys(this).length;

	for (; counter < objLength; counter++) {
		delete this[counter];
	}

	return this;
};

$.prototype.siblings = function () {
	let numberOfItems = 0;
	let counter = 0;

	const copy = Object.assign({}, this);

	for (let i = 0; i < copy.length; i++) {
		const array = copy[i].parentNode.children;

		for (let j = 0; j < array.length; j++) {
			if (copy[i] === array[j]) continue;

			this[counter] = array[j];
			counter++;
		}

		numberOfItems += array.length - 1;
	}
	
	this.length = numberOfItems;

	const objLength = Object.keys(this).length;
	for (; numberOfItems < objLength; numberOfItems++) {
		delete this[numberOfItems];
	}

	return this;
};
