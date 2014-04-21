/* global require */
require.config({
    "basePath": './',
    "paths": {
        "angular": "../bower_components/angular/angular",
        "angular-route": "../bower_components/angular-route/angular-route",
        "angular-ui": "../bower_components/angular-ui/build/angular-ui",
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
        }
    },
    deps: ['./bootstrap']
});
