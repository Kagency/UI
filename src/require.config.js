/* global require */
require.config({
    "basePath": './',
    "paths": {
        "react": "../bower_components/react/react-with-addons",
        "pouchdb": "../bower_components/pouchdb/dist/pouchdb",
        "domReady": "../bower_components/requirejs-domready/domReady"
    },
    "shim": {
        "react": {
            exports: "React"
        },
        "pouchdb": {
            exports: "PouchDB"
        }
    },
    deps: ['./bootstrap']
});
