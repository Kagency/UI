/* global require */
require.config({
    "basePath": './',
    "paths": {
        "text": "../bower_components/requirejs-text/text",
        "domReady": "../bower_components/requirejs-domready/domReady",

        "react": "../bower_components/react/react-with-addons",
        "JSXTransformer": "../bower_components/react/JSXTransformer",
        "jsx": ".././bower_components/jsx-requirejs-plugin/js/jsx",

        "jquery": "../bower_components/jquery/dist/jquery",
        "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",

        "pouchdb": "../bower_components/pouchdb/dist/pouchdb"
    },
    "jsx": {
        "fileExtension": ".jsx"
    },
    "shim": {
        "bootstrap": {
            "deps": ["jquery"]
        },
        "react": {
            "exports": "React"
        },
        "pouchdb": {
            "exports": "PouchDB"
        }
    },
    "deps": ["./main"]
});
