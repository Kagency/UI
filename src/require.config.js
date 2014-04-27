/* global require */
require.config({
    "basePath": './',
    "paths": {
        "angular": "../bower_components/angular/angular",
        "angular-route": "../bower_components/angular-route/angular-route",
        "angular-ui": "../bower_components/angular-ui/build/angular-ui",
        "angular-pouchdb": "../bower_components/angular-pouchdb/angular-pouchdb",
        "pouchdb": "../bower_components/pouchdb/dist/pouchdb-nightly",
        "domReady": "../bower_components/requirejs-domready/domReady"
    },
    "shim": {
        "angular": {
            exports: "angular"
        },
        "angular-route": {
            exports: "angular-route"
        },
        "angular-ui": {
            exports: "angular-ui"
        },
        "pouchdb": {
            exports: "PouchDB"
        },
        "angular-pouchdb": {
            deps: ["pouchdb"],
            exports: "angular-pouchdb"
        }
    },
    deps: ['./bootstrap']
});
