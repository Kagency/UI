define([
], function () {
    'use strict';

    var ValueObject = function(properties) {
        properties = properties || {};

        for (var property in properties) {
            if (properties.hasOwnProperty(property)) {
                if (this[property] === undefined) {
                    throw "Property " + property + " is undefined.";
                }

                this[property] = properties[property];
            }
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

    ValueObject.prototype.values = function() {
        var cleanObject = {};

        for (var property in this) {
            if (this.hasOwnProperty(property)) {
                cleanObject[property] = this[property];
            }
        }

        return cleanObject;
    };

    return ValueObject;
});
