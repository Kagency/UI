define([
    'require',
    'react',
    'bootstrap',
    'pouchdb',
    'jsx!components/feed'
], function (require, React, PouchDB) {
    'use strict';

    require(['domReady!'], function (document) {
        window.PouchDB = PouchDB;
        window.React = React;
    });
});
