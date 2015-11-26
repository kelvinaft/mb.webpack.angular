var DATA = require('./data/config'); //Arrumara para que seja global
console.log(DATA.URL);
define(['./route.resolver'], function() {
  var app = angular.module('app', ['ngMaterial','ngRoute','ngResource','routeResolverServices']);
  app.config(['$routeProvider','routeResolverProvider','$controllerProvider','$compileProvider','$filterProvider','$httpProvider','$provide',
	function ($routeProvider,routeResolverProvider,$controllerProvider,$compileProvider,$filterProvider,$provide) {
  		app.register =
      {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
      };

  		var route = routeResolverProvider.route;
  		// angular.forEach(APP.DATA.CONFIG.URLS, function(obj){
  		// 	$routeProvider.when('/'+obj.temp, route.resolve(obj.temp));
  		// });
  		/*RUTA FIJAS*/
  		$routeProvider.when('/demo', route.resolve('demo'));
      $routeProvider.when('/home', route.resolve('home'));
  		$routeProvider.when('/404', route.resolve('404'));
  		$routeProvider.when('/', route.resolve('home'));

  		$routeProvider.otherwise({ redirectTo: '/home' });

      app.components = {
        controller: $controllerProvider.register,
        service: $provide.service
      }
	}]);
  app.controller('appController', ['$scope','$rootScope','$location','$http', function($scope,$rootScope,$location,$http) {
	  var ng = $scope;
    ng.demo = 'HOLA SOY APP CONTROLLER';
    var vm = this;
	}]);
	return app;
});
