define([
    "ValueObject"
], function (ValueObject) {
    'use strict';

    var Task = function () {
        this.type = null;
        this.value = null;

        ValueObject.apply(this, arguments);
    };

    Task.prototype = ValueObject.prototype;

    return Task;
});
