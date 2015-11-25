'use strict';
console.log('404 controller');
define(['./../app'], function (app) {
	app.register.controller('404.controller', ['$scope','$http', function($scope,$http) {
			var ng = $scope;
	   	ng.demo = 'Hola soy 404 controller';
	}]);
});
