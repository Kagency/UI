define([
    './app',
    'pouchdb'
], function (app, pouchdb) {
    'use strict';

    app.factory('kagentStorage', function(pouchdb) {
        return pouchdb.create("kagent");
    });

    app.factory('kagentService', function(kagentStorage) {
        var service = function() {
            this.storage = kagentStorage;
        };

        service.prototype.appendTask = function(task) {
            // @TODO: Append task to PouchDB storage
            console.log(task);
        }

        return new service();
    });
});
