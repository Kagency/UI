define([
    'angular',
    'pouchdb',
    'angular-pouchdb'
], function (angular, PouchDB) {
    'use strict';

    return angular.module('app', [
        'ngRoute',
        'pouchdb'
    ]);
});
