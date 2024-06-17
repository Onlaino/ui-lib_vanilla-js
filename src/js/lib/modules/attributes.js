import $ from '../core';

$.prototype.getAttr = function (name) {
	if (!name) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		this[i].getAttribute(name);
	}
	return this;
};


$.prototype.setAttr = function (name, value) {
	if (!name || !value) {
		throw Error(`Вы не указали ${name} или ${value}`)
	}

	for (let i = 0; i < this.length; i++) {
		this[i].setAttribute(name, value);
	}

	return this;
};

$.prototype.rmAttr = function (name) {
	if (!name) {
		throw Error(`Вы не указали ${name} или ${value}`);
	}

	for (let i = 0; i < this.length; i++) {
		this[i].removeAttribute(name);
	}

	return this;
};

