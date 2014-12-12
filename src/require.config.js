/* global require */
require.config({
    "basePath": './',
    "paths": {
        "react": "../bower_components/react/react-with-addons",
        "pouchdb": "../bower_components/pouchdb/dist/pouchdb",
        "domReady": "../bower_components/requirejs-domready/domReady",
        "jquery": "../bower_components/jquery/dist/jquery",
        "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap"
    },
    "shim": {
        "react": {
            exports: "React"
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        "pouchdb": {
            exports: "PouchDB"
        }
    },
    deps: ['./bootstrap']
});
