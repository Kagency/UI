define([
    "pouchdb"
], function (PouchDB) {
    'use strict';

    var Storage = function () {
    };

    Storage.database = new PouchDB("storage");

    return Storage;
});
