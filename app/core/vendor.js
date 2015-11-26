module.exports = function () {
    /* Styles */
    require('../index.scss');
    /* JS */
    require('./data/config.js');
    global.$ = global.jQuery = require('jquery');
    require('angular');
    require('angular-route');
    require('angular-resource');
    require('angular-animate');
    require('angular-aria');
    require('angular-material');
};
