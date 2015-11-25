'use strict';
console.log('demo controller');
define(['./../app'], function (app) {
	app.register.controller('demo.controller', ['$scope','ajaxFactory', function($scope,ajaxFactory) {
      var ng = $scope;
      ng.demo = 'Hola soy demo controller';
			ajaxFactory.demo('hola'); //Demo ajaxfactory
	}]);
});
