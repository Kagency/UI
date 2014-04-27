define([
], function () {
    'use strict';

    var ValueBase = function() {};
    ValueBase.prototype.set = function(property, value) {
        var newValue = JSON.parse(JSON.stringify(this))
        newValue[property] = value;
        return newValue;
    }

    ValueBase.prototype.get = function(property) {
        if (this[property] === undefined) {
            throw "Property " + property + " is undefined.";
        }

        return this[property];
    }

    return ValueBase;
});
