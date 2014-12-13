define([
], function () {
    'use strict';

    var ValueObject = function() {};
    ValueObject.prototype.set = function(property, value) {
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
