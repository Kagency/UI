define([
    'require',
    'angular',
    'pouchdb',
    'angular-route',
    'app',
    'routes',
    'services'
], function (require, angular, PouchDB) {
    'use strict';

    require(['domReady!'], function (document) {
        window.PouchDB = PouchDB;
        angular.bootstrap(document, ['app']);
    });
});
