define([
    './app',
    './task',
    'pouchdb'
], function (app, Task, pouchdb) {
    'use strict';

    app.factory('kagentStorage', function(pouchdb) {
        return pouchdb.create("kagent");
    });

    app.factory('kagentService', function(kagentStorage) {
        var service = function() {
            this.storage = kagentStorage;
        };

        service.prototype.appendTask = function(task) {
            this.storage.post({
                type: "task",
                task: task,
            });
        }

        return new service();
    });
});
