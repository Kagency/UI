define([
], function () {
    'use strict';

    var ValueObject = function(properties) {
        var properties = properties || {};

        for (var property in properties) {
            if (!properties.hasOwnProperty(property)) {
                continue;
            }

            if (this[property] === undefined) {
                throw "Property " + property + " is undefined.";
            }

            this[property] = properties[property];
        }
    };

    ValueObject.prototype.set = function(property, value) {
        if (this[property] === undefined) {
            throw "Property " + property + " is undefined.";
        }

        var newValue = Object.create(this);
        newValue[property] = value;
        return newValue;
    };

    ValueObject.prototype.get = function(property) {
        if (this[property] === undefined) {
            throw "Property " + property + " is undefined.";
        }

        return this[property];
    };

    return ValueObject;
});
