'use strict';
console.log('home controller');
define(['./../app'], function (app) {
	app.register.controller('home.controller', ['$scope','$http', function($scope,$http) {
      var ng = $scope;
      ng.demo = 'Hola soy home controller';
	}]);
});
