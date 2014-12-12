define([
    'require',
    'react',
    'bootstrap',
    'pouchdb'
], function (require, React, PouchDB) {
    'use strict';

    require(['domReady!'], function (document) {
        window.PouchDB = PouchDB;
        window.React = React;
    });
});
