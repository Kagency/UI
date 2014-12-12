define([
    'require',
    'react',
    'pouchdb'
], function (require, React, PouchDB) {
    'use strict';

    require(['domReady!'], function (document) {
        window.PouchDB = PouchDB;
        window.React = React;
        
        alert("Hello world!");
    });
});
