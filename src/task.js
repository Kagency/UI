define([
    './value_base'
], function (ValueBase) {
    'use strict';

    var Task = function(type, value) {
        this.type = type || "Invalid";
        this.value = value || null;
    }
    Task.prototype = ValueBase.prototype;

    return Task;
});
