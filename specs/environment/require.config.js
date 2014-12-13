/* global require */

/**
 * Everything in this file will override the default require.config.js file
 * from the src directory
 */
require.config({
    "baseUrl": "/base/src",

    "paths": {
        "es5-shim": "../bower_components/es5-shim/es5-shim"
    },

    "shims": {
        /* Test related shim definitions */
    },

    "deps": ["es5-shim"]
});
