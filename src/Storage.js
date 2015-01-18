define([
    "pouchdb"
], function (PouchDB) {
    'use strict';

    var Storage = function () {
    };

    Storage.database = new PouchDB("api");
    Storage.remote = new PouchDB(
        window.location.protocol + "//" +
        window.location.hostname + ":" +
        window.location.port + "/api"
    );

    Storage.database.sync(Storage.remote).on("complete", function () {
        console.info("In sync");
    }).on("error", function(error) {
        alert("Error: " + error);
    });

    return Storage;
});
