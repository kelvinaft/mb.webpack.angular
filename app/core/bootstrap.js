/*jshint browser:true */
'use strict';
// load Angular
require('./vendor.js')();
// load the main app file
var appModule = require('../index.js');
// replaces ng-app="appName"
angular.element(document).ready(function () {
  require(['./service/ajaxFactory','./app'],function() {
    angular.bootstrap(document, [appModule.name,'ui.app.factorys'], {
    });
  });
});
